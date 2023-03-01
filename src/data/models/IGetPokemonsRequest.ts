import {IGetPokemonDetailsRequest} from '~/data/models/IGetPokemonDetailsRequest';

export interface IGetPokemonsRequest {
  count: number;
  next: string;
  previus: string;
  results: ISimplePokemon[];
}

export interface ISimplePokemon {
  name: string;
  url: string;
}

export interface IPokemonList extends IGetPokemonDetailsRequest {
  name: string;
  details: string;
}
