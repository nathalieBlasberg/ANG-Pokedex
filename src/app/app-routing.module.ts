import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDexComponent } from './poke-dex/poke-dex.component';
import { PokemonEntryComponent } from './pokemon-entry/pokemon-entry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full'},
  { path: 'home', component: PokeDexComponent },
  { path: 'pokemon/:name', component: PokemonEntryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
