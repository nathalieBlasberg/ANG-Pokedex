import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokeDexComponent } from "./poke-dex/poke-dex.component";
import { HeaderComponent } from "./header/header.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { PokemonEntryComponent } from "./pokemon-entry/pokemon-entry.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokeDexEntryComponent } from "./poke-dex-entry/poke-dex-entry.component";
import { OrderPipe } from "src/pipes/order.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PokeDexComponent,
    HeaderComponent,
    PaginationComponent,
    PokemonEntryComponent,
    PageNotFoundComponent,
    PokeDexEntryComponent,
    OrderPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
