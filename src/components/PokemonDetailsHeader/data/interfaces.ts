import {IGetPokemonDetailsFullRequest} from '~/data/models';

export namespace IPokemonDetailsHeader {
  export interface View {
    goBack: () => void;
  }
  export interface ModelProps extends View {}
  export interface Model extends View {
    pokemonImg: string;
    pokemonDetails: IGetPokemonDetailsFullRequest;
  }
}
