import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {PokemonsList} from '~/components/PokemonsList';
import {GetPokemonDetails} from '~/data/useCases/GetPokemonDetails';
import {GetPokemons} from '~/data/useCases/GetPokemons';
import {AxiosHttpClient} from '~/utils/api';
import {pokemonDetailsMock} from '~/@mocks/pokemonDetails';
import {simplePokemonMock} from '~/@mocks/simplePokemon';
import {IGetPokemons} from '~/data/dataInterfaces';

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

jest.mock('../../data/useCases/GetPokemonDetails');
jest.mock('../../data/useCases/GetPokemons');

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

  it('call on all Pokemon', async () => {
    const GetPokemonsMock = GetPokemons as jest.Mocked<typeof GetPokemons>;

    const GetPokemonsInstance = new GetPokemonsMock(AxiosHttpClient);

    const GetPokemonsServiceMock =
      GetPokemonsInstance.send as jest.MockedFunction<
        typeof GetPokemonsInstance.send
      >;

    const response: IGetPokemons.Response = {
      message: '',
      status: 'Ok',
      data: {
        count: 0,
        next: '',
        previus: '',
        results: [
          {
            name: simplePokemonMock.name,
            url: simplePokemonMock.details,
          },
        ],
      },
    };

    GetPokemonsServiceMock.mockResolvedValue({
      message: '',
      data: response.data,
      status: 'Ok',
    });
    const result = await GetPokemonsInstance.send({});
    expect(result.status).toBe('Ok');
    expect(result.data.results).toBe(response.data.results);
  });

  it('call on details Pokemon Api', async () => {
    const GetPokemonDetailsMock = GetPokemonDetails as jest.Mocked<
      typeof GetPokemonDetails
    >;

    const GetPokemonDetailsInstance = new GetPokemonDetailsMock(
      AxiosHttpClient
    );

    const GetPokemonsServiceDetailsMock =
      GetPokemonDetailsInstance.send as jest.MockedFunction<
        typeof GetPokemonDetailsInstance.send
      >;

    GetPokemonsServiceDetailsMock.mockResolvedValue({
      message: '',
      data: pokemonDetailsMock,
      status: 'Ok',
    });
    const result = await GetPokemonDetailsInstance.send({
      pokemonUrl: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    });
    expect(result.status).toBe('Ok');
    expect(result.data).toBe(pokemonDetailsMock);
  });
});
