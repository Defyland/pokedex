import {IGetPokemonDetailsFullRequest} from '~/data/models';
import {theme} from '~/styles/theme';

export type IColorsKey = keyof typeof theme.colors;

export namespace IPokemonDetails {
  export interface View {}
  export interface ModelProps {}
  export interface Model {
    goBack: () => void;
    bgColor: IColorsKey;
    isLoading: boolean;
  }
  export interface Container {
    color: IColorsKey;
  }
}
