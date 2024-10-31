import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';
import { PokedexList, Pokedex } from '../pokedex.model';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.scss']
})
export class PokeDexComponent implements OnInit {
  private spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  
  public pokedexList$: PokedexList[] = [];
  public numberPages: number = 0;
  public offset: number = 0;
  public limit: number = 20;
  public currentPage: number = 1;
  public pagesList: number[] = [];
  

  constructor(
    private pokeData: PokeDataService
  ) {}

  public ngOnInit(): void {
    this.pokeData.fetchPokemonData(`offset=${this.offset}&limit=${this.limit}`)
    .subscribe(response => this.onFetchedPokemonData(response));
  }

  public onFetchedPokemonData(pokeList: Pokedex): void {
    this.pokedexList$ = pokeList.results;
    this.numberPages = Math.ceil(pokeList.count / 20);
    this.currentPage = Math.floor(this.offset / this.limit);
    this.pagesList = Array(Math.ceil(pokeList.count / 20)).fill(0).map((_, i) => i);
    this.pokedexList$.forEach(pokeEntry => {
      const pokeId = pokeEntry.url.match(/^https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\/$/);
      if (pokeId === null) {
        return;
      }
      pokeEntry.url = `${this.spriteUrl}${pokeId[1]}.png`;
    });
  }

  public onButtonClick(newOffset: number): void {
    this.offset = newOffset;

    if (this.offset < 0) {
      this.offset = 0;
    }

    let url = `offset=${this.offset}&limit=${this.limit}`;

    this.pokeData.fetchPokemonData(url)
    .subscribe(response => this.onFetchedPokemonData(response));
  }
}
