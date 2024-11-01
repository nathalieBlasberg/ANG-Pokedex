import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NamedAPIResourceList, Pokemon } from "../models/pokedex.model";

@Injectable({
  providedIn: "root",
})
export class PokeDataService {
  public baseUrl: string = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private http: HttpClient) {}

  fetchPokemonData(url: string) {
    return this.http.get<NamedAPIResourceList>(`${this.baseUrl}?${url}`);
  }

  fetchPokemon(url: string) {
    return this.http.get<Pokemon>(url);
  }

  /* fetchPokeSpecies(pokeName: string) {
    return this.http.get<PokemonSpecies>(`${this.baseUrl}-species/${pokeName}`);
  } */
}
