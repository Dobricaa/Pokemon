import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonDetails } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() public pokemon!: Pokemon;
  pokemonImgJpg!: string;

  constructor(private readonly pokemonService: PokemonService) {}
  ngOnInit(): void {
    const pokemonId = this.pokemon.url.split('/')[6];

    this.getPokemonInfo(pokemonId);
  }

  public async getPokemonInfo(urlPokemon: string) {
    await this.pokemonService
      .getPokemonDetail(urlPokemon)
      .subscribe((responseTwo: PokemonDetails) => {
        this.pokemonImgJpg = responseTwo.sprites.back_default;
      });
  }
}
