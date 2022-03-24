import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex, Pokemon, PokemonSpecies } from './pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  public baseUrl:string = `https://pokeapi.co/api/v2/pokemon`; 

  constructor(
    private http: HttpClient
    ) { }

  fetchPokemonData(url: string) {
    return this.http.get<Pokedex>(`${this.baseUrl}?${url}`);
  }

  fetchPokedexEntry(pokeName: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/${pokeName}`);
  }

  fetchPokeSpecies(pokeName: string) {
    return this.http.get<PokemonSpecies>(`${this.baseUrl}-species/${pokeName}`);
  }
}
