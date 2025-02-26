import {Component, OnInit} from '@angular/core';
import {PokemonSearchService} from "../../services/pokemon-search.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon, PokemonType} from "../../models/pokemon";
import {getTypeColor} from "../../shared/utils";
import {catchError, of, switchMap} from "rxjs";

@Component({
    selector: 'app-pokemon-view',
    templateUrl: './pokemon-view.component.html',
    styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

    keyword: string;
    pokemonData: Pokemon;
    notFound = false;
    activeTab = 1;

    constructor(
        private service: PokemonSearchService,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.keyword = this.route.snapshot.params['keyword'];
        if (!this.keyword) {
            this.notFound = true;
            return;
        }
        this.fetchData();
    }

    fetchData() {
        this.service.search(this.keyword).pipe(
            switchMap(restData => {
                this.pokemonData = restData;
                return this.service.getPokemonDataGraphQL(this.keyword)
            }),
            catchError(error => {
                this.notFound = true;
                return of(error);
            }))
            .subscribe(graphqlData => {
                    this.patchPokemonData(this.pokemonData, graphqlData);
                },
                () => {
                    this.notFound = true;
                }
            );
    }

    private patchPokemonData(original: Pokemon, graphqlResult: any) {
        if (original == undefined){
            return;
        }
        original.description = graphqlResult?.data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text;
        original.types = graphqlResult?.data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemontypes?.map((pokemon_v2_type: any) => {
            return {
                name: pokemon_v2_type?.pokemon_v2_type?.name
            } as PokemonType

        });
        original.stats = graphqlResult?.data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonstats?.map((stat: any) => {
            return {
                base_stat: stat?.base_stat,
                stat: {
                    name: stat?.pokemon_v2_stat?.name
                }
            }
        });
    }

    protected readonly getTypeColor = getTypeColor;
}
