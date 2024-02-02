import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonroutes: Routes = [
  {path:"edit/pokemon/:id", component: EditPokemonComponent},
  { path:"pokemons", component: ListPokemonComponent},
  { path:"pokemon/:id", component: DetailPokemonComponent}
  
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonroutes),
    FormsModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
