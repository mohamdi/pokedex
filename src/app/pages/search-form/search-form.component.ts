import {Component} from '@angular/core';
import {PokemonSearchService} from "../../services/pokemon-search.service";
import {Router} from "@angular/router";
import {PokemonListItem} from "../../models/pokemon";

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
    searchInput: string | undefined;
    pokemonList: PokemonListItem[];

    constructor(
        private service: PokemonSearchService,
        private router: Router
    ) {
    }

    search() {
        this.router.navigateByUrl(`/pokemon/${this.searchInput}`);
    }

    randomSearch() {
        this.service.getPokemonsList()
            .subscribe(result => {
                this.pokemonList = result?.results;
                const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
                this.router.navigateByUrl(`/pokemon/${this.pokemonList[randomIndex].name}`);
            })
    }
}
