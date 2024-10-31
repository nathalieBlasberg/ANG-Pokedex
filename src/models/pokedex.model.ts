export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface NamedAPIResourceList {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: PokemonSprites;
  types: PokemonTypes[];
}

export interface PokemonSprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface PokemonTypes {
  slot: number;
  type: NamedAPIResource;
}

export interface Characteristic {
  descriptions: Description[];
}

export interface Description {
  description: string;
  language: NamedAPIResource;
}
