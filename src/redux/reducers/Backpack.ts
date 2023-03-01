import {createSlice} from '@reduxjs/toolkit';

interface IBackpackState {
  pokemons: any[];
}

const initialState: IBackpackState = {
  pokemons: [],
};

const Backpack = createSlice({
  name: 'Backpack',
  initialState,
  reducers: {
    setPokemonOnBackpack: (state, {payload}) => {
      const newPokemons = [...state.pokemons, payload];
      return {...state, pokemons: newPokemons};
    },
  },
});

export const {setPokemonOnBackpack} = Backpack.actions;

export default Backpack.reducer;
