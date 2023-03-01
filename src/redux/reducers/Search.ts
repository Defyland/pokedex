import {createSlice} from '@reduxjs/toolkit';

interface ISearchState {
  query: string;
}

const initialState: ISearchState = {
  query: '',
};

const Search = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setQuery: (state, {payload}) => {
      return {...state, query: payload};
    },
  },
});

export const {setQuery} = Search.actions;

export default Search.reducer;
