import {IPokemonList} from '~/data/models';
import {IPokemonList as IPokemonListItem} from '~/data/models';
import {ListRenderItemInfo} from 'react-native';

export namespace IPokemonsList {
  export interface View {}
  export interface ModelProps {}
  export interface Model {
    query: string;
    isLoading: boolean;
    pokemons: IPokemonList[];
    searchPokemons: IPokemonList[];
    renderItem: ({item}: ListRenderItemInfo<IPokemonListItem>) => JSX.Element;
    keyExtractor: (item: IPokemonListItem, index: number) => string;
    updatePokemons: () => void;
  }
}
