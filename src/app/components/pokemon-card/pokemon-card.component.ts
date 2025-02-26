import {Component, Input, OnInit} from '@angular/core';
import {EvolutionChain} from "../../models/pokemon";
import {PokemonSearchService} from "../../services/pokemon-search.service";
import {getTypeColor} from "../../shared/utils";

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{
    @Input({required: true}) chain!: EvolutionChain;
    @Input({required: true}) color!: string;
    imageUrl;

    constructor(
        private service: PokemonSearchService
    ) {

    }

    ngOnInit(): void {
        this.service.search(this.chain?.species?.name)
            .subscribe(data => {
                this.imageUrl = data?.sprites.other["official-artwork"].front_default;
            })
    }

    protected readonly getTypeColor = getTypeColor;
}
