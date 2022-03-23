import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokeDataService } from '../poke-data.service';
import { Pokemon, PokemonSpecies } from '../pokedex.model';

@Component({
  selector: 'app-pokemon-entry',
  templateUrl: './pokemon-entry.component.html',
  styleUrls: ['./pokemon-entry.component.scss']
})
export class PokemonEntryComponent implements OnInit {

  public pokemon$?: Pokemon;
  public pokeName?: string;
  public pokeSprite?: string;
  public pokeSpecies$?: PokemonSpecies;
  public pokeGenus?: string;
  public pokeDescription?: string;

  constructor(
    private route: ActivatedRoute,
    private service: PokeDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokeName = params.get("name")!;
      this.service.fetchPokedexEntry(this.pokeName)
        .subscribe(response => {
          this.pokemon$ = response;
          this.pokeSprite = this.pokemon$.sprites.other['official-artwork'].front_default;
        });
      this.service.fetchPokeSpecies(this.pokeName)
        .subscribe(response => {
          this.pokeSpecies$ = response;
          this.pokeGenus = this.pokeSpecies$.genera.filter(genus => genus.language.name === "en")[0].genus;
          this.pokeDescription = this.pokeSpecies$.flavor_text_entries.filter(text => text.language.name === "en")[0].flavor_text;
        })
    }
    );
  }

}
