import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PokemonCard} from '~/components/PokemonCard';
import {simplePokemonMock} from '~/@mocks/simplePokemon';

const FN = jest.fn();

describe('Render PokemonCard', () => {
  it('Should be PokemonCard exist', () => {
    const {getByTestId} = render(
      <PokemonCard pokemon={simplePokemonMock} selectedPokemon={FN} />
    );
    const currentElement = getByTestId(`PokemonCard`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be PokemonCard exist with correct props', () => {
    const {getByTestId, getAllByTestId} = render(
      <PokemonCard pokemon={simplePokemonMock} selectedPokemon={FN} />
    );
    const currentElement = getByTestId(`PokemonCard`);
    expect(currentElement).toBeTruthy();
    const nameElement = getByTestId(`PokemonCard:Name`);
    expect(nameElement).toBeTruthy();
    expect(nameElement.props.children).toBe('charmander');
    const idElement = getByTestId(`PokemonCard:Id`);
    expect(idElement.props.children).toBe(' #4');
    expect(idElement).toBeTruthy();
    const typesElements = getAllByTestId('PokemonCard:TypeName');
    expect(typesElements).toBeTruthy();
    expect(typesElements).toHaveLength(simplePokemonMock.types.length);
    expect(typesElements[0].props.children).toBe('fire');
  });
  it('Should be PokemonCard is Press ', () => {
    const {getByTestId, getAllByTestId} = render(
      <PokemonCard pokemon={simplePokemonMock} selectedPokemon={FN} />
    );
    const currentElement = getByTestId(`PokemonCard:Press`);
    expect(currentElement).toBeTruthy();
    fireEvent.press(currentElement);
    expect(FN).toBeCalled();
    expect(FN).toBeCalledWith(simplePokemonMock);
  });
});
