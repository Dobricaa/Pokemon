import { Component, OnInit, Output } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonDetails, ResultColection } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];
  public pokemonUrl!: any[];
  pokemonDetails!: any;
  page: number = 1;
  totalPokemons: number = 150;
  searchText: string = '';

  constructor(public readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons() {
    if (this.page == 1) {
      this.page = 0;
    } else {
      this.page = (this.page - 1) * 30;
    }
    this.pokemonService.getPokemonsForPages(30, this.page).subscribe(
      (response: any) => {
        this.pokemons = response.results;
      },
      (error) => {
        console.log('fail' + error);
      }
    );
  }

  public getPokemonInfo(urlPokemon: string) {
    this.pokemonService
      .getPokemonDetail(urlPokemon)
      .subscribe((responseTwo: any) => {
        this.totalPokemons = responseTwo.count;
        this.pokemonDetails = responseTwo.stats;
      });
  }
}
