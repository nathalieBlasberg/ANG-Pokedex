import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex, PokeSprite } from './pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  public baseUrl:string = `https://pokeapi.co/api/v2/pokemon?`; 

  constructor(private http: HttpClient) { }

  fetchPokemonData(url: string) {
    return this.http.get<Pokedex>(`${this.baseUrl}${url}`);
  }
}
