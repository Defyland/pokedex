import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Home} from '~/pages/Home';

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
  const {pokemonDetailsMock} = require('~/@mocks/pokemonDetails');
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
        },
        PokemonDetail: {
          pokemonDetails: pokemonDetailsMock,
        },
      };
    },
  };
});

describe('Render Home', () => {
  it('Should be Home exist', () => {
    const {getByTestId} = render(<Home />);
    const currentElement = getByTestId(`Home`);
    expect(currentElement).toBeTruthy();
  });
});
