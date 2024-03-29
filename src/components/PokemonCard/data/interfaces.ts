import {IPokemonList} from '~/data/models';

export namespace IPokemonCard {
  export interface View {
    selectedPokemon: (pokemon: IPokemonList) => void;
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
