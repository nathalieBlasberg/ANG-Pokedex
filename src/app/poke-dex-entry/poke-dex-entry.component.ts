import { Component, Input, OnInit } from "@angular/core";
import { take } from "rxjs";
import { NamedAPIResource, type Pokemon } from "src/models/pokedex.model";
import { PokeDataService } from "src/services/poke-data.service";
import { bgColorForType } from "src/const/ColorForTypes.cons";

@Component({
  selector: "app-poke-dex-entry",
  templateUrl: "./poke-dex-entry.component.html",
  styleUrls: ["./poke-dex-entry.component.scss"],
})
export class PokeDexEntryComponent implements OnInit {
  @Input() resource: NamedAPIResource = { name: "", url: "" };

  public pokemon: Pokemon = {
    id: 0,
    name: "",
    order: 0,
    sprites: {
      other: {
        "official-artwork": {
          front_default: "",
        },
      },
    },
    types: [],
  };

  public readonly colorForType = bgColorForType;

  constructor(private pokeData: PokeDataService) {}

  public ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): void {
    if (this.resource.url.length === 0) return;

    this.pokeData
      .fetchPokemon(this.resource.url)
      .pipe(take(1))
      .subscribe({
        next: (next) => (this.pokemon = next),
      });
  }
}
