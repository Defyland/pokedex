import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {PokemonsList} from '~/components/PokemonsList';
const MockFN = jest.fn();
const MockOneFN = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: MockFN,
    }),
  };
});

jest.mock('axios', () => {
  return {
    AxiosReponse: {},
  };
});

jest.mock('escape-string-regexp', () => {
  return jest.fn();
});

jest.mock('react-redux', () => {
  const {simplePokemonMock} = require('~/@mocks/simplePokemon');
  return {
    useDispatch: () => {
      return MockOneFN;
    },
    useSelector: () => {
      return {
        Backpack: {
          pokemons: [],
        },
        Pokemon: {
          pokemons: [simplePokemonMock],
          next: '',
          isLoading: false,
        },
        Search: {
          query: '',
        },
      };
    },
  };
});

describe('Render PokemonsList', () => {
  it('Should be PokemonsList exist', () => {
    const {getByTestId} = render(<PokemonsList />);
    const currentElement = getByTestId(`PokemonsList`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be PokemonsList exist with correct props', () => {
    const {getByTestId, getAllByTestId} = render(<PokemonsList />);
    const currentElement = getByTestId(`PokemonsList`);
    expect(currentElement).toBeTruthy();
    const pokemonsElements = getAllByTestId('PokemonCard:Press');
    expect(pokemonsElements).toHaveLength(1);
    fireEvent.press(pokemonsElements[0]);
    expect(MockFN).toBeCalled();
    expect(MockOneFN).toBeCalled();
    expect(MockFN).toHaveBeenCalledWith('PokemonDetails');
    expect(MockOneFN).toHaveBeenCalledWith({
      payload: undefined,
      type: 'PokemonDetail/pokemonDetailsClean',
    });
    expect(MockOneFN).toHaveBeenCalledWith({
      payload: undefined,
      type: 'PokemonDetail/pokemonDetailsClean',
    });
    expect(MockOneFN).toHaveBeenCalledWith({
      payload: 'fire',
      type: 'PokemonDetail/pokemonDetailsSetColor',
    });
    expect(MockOneFN).toHaveBeenCalledWith({
      payload: 'https://pokeapi.co/api/v2/pokemon/4/',
      type: 'PokemonDetail/pokemonDetailsFetch',
    });
  });
});
