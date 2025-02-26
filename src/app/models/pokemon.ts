export class Pokemon {
    id: number;
    name: string;
    description: string;
    stats: Stat[];
    types: PokemonType[];
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    };
    species: PokemonSpecies;
}

export class PokemonSpecies {
    name: string;
    evolution_chain: {
        url: string;
    }
}

export class EvolutionChain {
    species: {
        name: string;
        url: string;
    }
    evolves_to: EvolutionChain[];
}


export class Stat {
    base_stat: number;
    stat: {
        name: string;
    }
}

export class PokemonType {
    name: string;
}

export class PokemonListItem {
    name: string;
    url: string;
}
