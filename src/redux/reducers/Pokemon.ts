import {createSlice} from '@reduxjs/toolkit';
import {IPokemonList} from '~/data/models';
import uniqBy from 'lodash/uniqBy';

interface IPokemonState {
  pokemons: IPokemonList[];
  next: string;
  isLoading: boolean;
}

const initialState: IPokemonState = {
  pokemons: [],
  next: '',
  isLoading: false,
};

const Pokemon = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    pokemonsFetchSearch: (_state, _action) => {},
    pokemonsFetchClean: () => {
      return {...initialState};
    },
    pokemonsFetch: (state, _action) => {
      return {...state, isLoading: true};
    },
    pokemonsFetchSuccess: (state, {payload}) => {
      const pokemons = uniqBy([...state.pokemons, ...payload.pokemons], 'name');
      return {
        ...state,
        pokemons,
        isLoading: false,
        next: payload.next,
      };
    },
    pokemonsFetchError: () => {
      return {...initialState};
    },
  },
});

export const {
  pokemonsFetch,
  pokemonsFetchSearch,
  pokemonsFetchClean,
  pokemonsFetchSuccess,
  pokemonsFetchError,
} = Pokemon.actions;

export default Pokemon.reducer;
