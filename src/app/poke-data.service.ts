import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex, PokeSprite } from './pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  baseUrl:string = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) { }

  fetchPokemonData() {
    return this.http.get<Pokedex>(`${this.baseUrl}pokemon?offset=0&limit=20`);
  }
}
