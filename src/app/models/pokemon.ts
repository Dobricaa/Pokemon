export interface Pokemon {
  name: string;
  url: string;
  pokemonDetails: PokemonDetails;
}

export interface ResultColection {
  results: Pokemon[];
}

export interface PokemonDetails {
  sprites: SpritesDetails;
  stats: Stats[];
}

export interface SpritesDetails {
  back_default: string;
}

export interface Stats {
  base_stat: number;
}
