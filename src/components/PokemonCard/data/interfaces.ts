import {IPokemonList} from '~/data/models';

export namespace IPokemonCard {
  export interface View {
    selectedPokemon: (pokemonUrl: string) => void;
    pokemon: IPokemonList;
  }
  export interface ModelProps extends View {}
  export interface Model extends View {
    bgColor: string;
  }
  export interface IPokemonImageType {
    type: 'grid' | 'line';
  }
}
