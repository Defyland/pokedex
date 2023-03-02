import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PokemonDetailsHeader} from '~/components/PokemonDetailsHeader';

const FN = jest.fn();
3;

jest.mock('axios', () => {
  return {
    AxiosReponse: {},
  };
});

jest.mock('react-redux', () => {
  const {pokemonDetailsMock} = require('~/@mocks/pokemonDetails');
  return {
    useDispatch: () => {},
    useSelector: () => {
      return {
        PokemonDetail: {
          pokemonDetails: pokemonDetailsMock,
        },
      };
    },
  };
});

describe('Render PokemonDetailsHeader', () => {
  it('Should be PokemonDetailsHeader exist', () => {
    const {getByTestId} = render(<PokemonDetailsHeader goBack={FN} />);
    const currentElement = getByTestId(`PokemonDetailsHeader`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be PokemonDetailsHeader exist with correct props', () => {
    const {pokemonDetailsMock} = require('~/@mocks/pokemonDetails');
    const {getByTestId, getAllByTestId} = render(
      <PokemonDetailsHeader goBack={FN} />
    );
    const currentElement = getByTestId(`PokemonDetailsHeader`);
    expect(currentElement).toBeTruthy();
    const nameElement = getByTestId(`PokemonDetailsHeader:Name`);
    expect(nameElement).toBeTruthy();
    expect(nameElement.props.children).toBe('bulbasaur');
    const idElement = getByTestId(`PokemonDetailsHeader:Id`);
    expect(idElement.props.children).toBe('#1');
    expect(idElement).toBeTruthy();
    const typesElements = getAllByTestId('PokemonDetailsHeader:TypeName');
    expect(typesElements).toBeTruthy();
    expect(typesElements).toHaveLength(pokemonDetailsMock.types.length);
    expect(typesElements[0].props.children).toBe('grass');
  });
  it('Should be PokemonDetailsHeader is Press ', () => {
    const {getByTestId} = render(<PokemonDetailsHeader goBack={FN} />);
    const currentElement = getByTestId(`PokemonDetailsHeader:Press`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(FN).toBeCalled();
  });
});
