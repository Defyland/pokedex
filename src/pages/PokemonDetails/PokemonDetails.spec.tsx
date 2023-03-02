import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {PokemonDetails} from '~/pages/PokemonDetails';

const MockFN = jest.fn();
const MockOneFN = jest.fn();
const MockTwoFN = jest.fn();
const MockThreeFN = jest.fn();

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

jest.mock('~/pages/PokemonDetails/data/model', () => {
  return {
    usePokemonDetails: () => {
      return {
        goBack: jest.fn(),
        bgColor: '#00000',
        isLoading: false,
        canCapture: true,
        catchPokemon: MockTwoFN,
        dropPokemon: MockThreeFN,
      };
    },
  };
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

describe('Render PokemonDetails', () => {
  it('Should be PokemonDetails exist', () => {
    const {getByTestId} = render(<PokemonDetails />);
    const currentElement = getByTestId(`PokemonDetails`);
    expect(currentElement).toBeTruthy();
  });

  it('Should be PokemonDetails is Press ', () => {
    const {getByTestId} = render(<PokemonDetails />);
    const currentElement = getByTestId(`PokemonDetails:Press`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(MockTwoFN).toBeCalled();
  });
});
