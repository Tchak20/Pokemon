import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute,  Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon :Pokemon|undefined
  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if(pokemonId){
      this.pokemonService.getPokemonId(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
      ;
    }
    
  }
    goBack(){
      this.router.navigate(['/pokemons'])
    }

    goEdit(pokemon: Pokemon){
      this.router.navigate(['/edit/pokemon',pokemon.id])
    }
  }