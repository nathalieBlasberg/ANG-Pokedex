import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokeDataService } from "../../services/poke-data.service";
import { Pokemon } from "../../models/pokedex.model";

@Component({
  selector: "app-pokemon-entry",
  templateUrl: "./pokemon-entry.component.html",
  styleUrls: ["./pokemon-entry.component.scss"],
})
export class PokemonEntryComponent implements OnInit {
  public pokemon$?: Pokemon;
  public pokeName?: string;
  public pokeSprite?: string;
  //public pokeSpecies$?: PokemonSpecies;
  public pokeGenus?: string;
  public pokeDescription?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router //private service: PokeDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.pokeName = params.get("name")!;
      /* this.service.fetchPokedexEntry(this.pokeName)
        .subscribe(response => {
          this.onFetchedPokedexEntry(response);
        }, error => {
          this.onCatchedError(error.status);
        });
      this.service.fetchPokeSpecies(this.pokeName)
        .subscribe(response => {
          this.onFetchedPokeSpecies(response);
        }, error => {
          this.onCatchedError(error.status);
        }) */
    });
  }

  onFetchedPokedexEntry(pokedexEntry: Pokemon): void {
    this.pokemon$ = pokedexEntry;
    this.pokeSprite =
      this.pokemon$.sprites.other["official-artwork"].front_default;
  }

  /* onFetchedPokeSpecies(pokeSpecies: PokemonSpecies): void {
    this.pokeSpecies$ = pokeSpecies;
    this.pokeGenus = this.pokeSpecies$.genera.filter(genus => genus.language.name === "en")[0].genus;
    this.pokeDescription = this.pokeSpecies$.flavor_text_entries.filter(text => text.language.name === "en")[0].flavor_text;
  } */

  onCatchedError(status: number) {
    if (status === 404) this.router.navigate(["**"]);
  }
}
