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
      return {...state, pokemons: payload};
    },
  },
});

export const {setPokemonOnBackpack} = Backpack.actions;

export default Backpack.reducer;
