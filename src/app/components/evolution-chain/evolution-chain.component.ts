import {Component, Input, OnInit} from '@angular/core';
import {EvolutionChain, Pokemon} from "../../models/pokemon";
import {PokemonSearchService} from "../../services/pokemon-search.service";

@Component({
    selector: 'app-evolution-chain',
    templateUrl: './evolution-chain.component.html',
    styleUrls: ['./evolution-chain.component.scss']
})
export class EvolutionChainComponent implements OnInit {
    @Input({required: true}) pokemonData: Pokemon;
    evolution: EvolutionChain | undefined;
    @Input({required: true}) color: string;

    constructor(
        private service: PokemonSearchService
    ) {
    }

    ngOnInit(): void {
        this.fetchData();
    }

    private fetchData() {
        this.service.getSpeciesData(this.pokemonData?.species?.name)
            .subscribe(species => {
                const evolutionId = species?.evolution_chain?.url.split('/')[species?.evolution_chain?.url.split('/').length - 2];
                this.service.getEvolutionChain(Number(evolutionId))
                    .subscribe(chain => {
                        this.evolution = chain?.chain;
                    })
            })
    }
}
