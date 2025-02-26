import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {EvolutionChain, Pokemon, PokemonSpecies} from "../models/pokemon";

@Injectable({
    providedIn: 'root'
})
export class PokemonSearchService {
    private url = `${environment.backendPrefix}`;
    private graphqlEndpoint = 'https://beta.pokeapi.co/graphql/v1beta';

    constructor(
        private http: HttpClient
    ) {
    }

    search(keyword: string | number) {
        return this.http.get<Pokemon | undefined>(`${this.url}/pokemon/${keyword}`);
    }

    getSpeciesData(keyword: string | number) {
        return this.http.get<PokemonSpecies>(`${this.url}/pokemon-species/${keyword}`);
    }

    getEvolutionChain(evolutionId: number) {
        return this.http.get<{ chain: EvolutionChain }>(`${this.url}/evolution-chain/${evolutionId}`);
    }

    getPokemonDataGraphQL(keyword: string | number) {
        const field = isNaN(Number(keyword)) ? 'name' : 'id';
        const query = `
        query{
              pokemon_v2_pokemon(where: {${field}: {_eq: "${keyword}"}}) {
            name
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
            pokemon_v2_pokemonspecy {
              pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
                flavor_text
              }
            }
            pokemon_v2_pokemonstats {
              base_stat
              pokemon_v2_stat {
                name
              }
            }
          }
         }
    `;
        return this.http.post<any>(this.graphqlEndpoint, {query});
    }

    getPokemonsList() {
        return this.http.get<any>(`${this.url}/pokemon?limit=100000&offset=0`);
    }
}
