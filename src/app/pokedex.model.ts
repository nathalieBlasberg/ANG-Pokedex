export interface Pokedex {
    count: number;
    next: string;
    previous: string;
    results: PokedexList[];
}

export interface PokedexList {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    }
  }[];
  held_items: {
    item: {
      name: string;
    }
  }[];
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      }
    }
  };
  types: {
    type: {
      name: string;
    }
  }[];
}

export interface PokemonSpecies {
  flavor_text_entries:
    {
      flavor_text: string;
      language: {
        name: string;
      }
    }[];
    
  genera: {
    genus: string;
    language: {
      name: string;
    }
  }[]
}
