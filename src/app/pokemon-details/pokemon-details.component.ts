import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetails, Stats } from '../models/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails!: any;
  pokemonId!: any;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.params;
    this.getPokemonInfo(+this.pokemonId.id);
  }

  public getPokemonInfo(urlPokemon: number) {
    this.pokemonService
      .getPokemonDetail(urlPokemon)
      .subscribe((responseTwo: Stats) => {
        this.pokemonDetails = responseTwo;
      });
  }
}
