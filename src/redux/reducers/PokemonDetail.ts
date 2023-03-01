import {createSlice} from '@reduxjs/toolkit';
import {IGetPokemonDetailsFullRequest} from '~/data/models';
import {theme} from '~/styles/theme';

interface IPokemonDetailState {
  color: keyof typeof theme.colors;
  pokemonDetails: IGetPokemonDetailsFullRequest;
  isLoading: boolean;
}

const initialState: IPokemonDetailState = {
  pokemonDetails: {} as IGetPokemonDetailsFullRequest,
  isLoading: true,
  color: 'white',
};

const PokemonDetail = createSlice({
  name: 'PokemonDetail',
  initialState,
  reducers: {
    pokemonDetailsFetch: (_state, _action) => {},
    pokemonDetailsSuccess: (state, {payload}) => {
      return {...state, pokemonDetails: payload, isLoading: false};
    },
    pokemonDetailsSetColor: (state, {payload}) => {
      return {...state, color: payload};
    },
    pokemonDetailsError: state => {
      return {
        ...state,
        pokemonDetails: {} as IGetPokemonDetailsFullRequest,
        isLoading: false,
      };
    },
  },
});

export const {
  pokemonDetailsFetch,
  pokemonDetailsSuccess,
  pokemonDetailsError,
  pokemonDetailsSetColor,
} = PokemonDetail.actions;

export default PokemonDetail.reducer;
