export interface Pokedex {
    count: number;
    next: string;
    prev: string;
    results: PokedexList[];
}

export interface PokedexList {
  name: string;
  url: string;
}

export interface PokeSprite {
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
}
