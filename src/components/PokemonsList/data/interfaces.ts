import {IPokemonList} from '~/data/models';
import {IPokemonList as IPokemonListItem} from '~/data/models';
import {ListRenderItemInfo} from 'react-native';

export namespace IPokemonsList {
  export interface View {}
  export interface ModelProps {}
  export interface Model {
    query: string;
    isLoading: boolean;
    filter: 'all' | 'catchs';
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'catchs'>>;
    pokemons: IPokemonList[];
    backpackPokemons: IPokemonList[];
    updatePokemons: () => void;
    searchPokemons: IPokemonList[];
    keyExtractor: (item: IPokemonListItem, index: number) => string;
    renderItem: ({item}: ListRenderItemInfo<IPokemonListItem>) => JSX.Element;
  }
}
