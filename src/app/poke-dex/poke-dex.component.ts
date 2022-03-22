import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';
import { PokedexList, Pokedex } from '../pokedex.model';

@Component({
  selector: 'app-poke-dex',
  templateUrl: './poke-dex.component.html',
  styleUrls: ['./poke-dex.component.scss']
})
export class PokeDexComponent implements OnInit {
  public pokedexList$: PokedexList[] = [];

  constructor(
    private pokeData: PokeDataService
  ) {}

  public ngOnInit(): void {
    this.pokeData.fetchPokemonData()
    .subscribe(response => {
      this.onFetchedData(response);
    });
  }

  public onFetchedData(pokeList: Pokedex): void {
    this.pokedexList$ = pokeList.results;
  }

}
