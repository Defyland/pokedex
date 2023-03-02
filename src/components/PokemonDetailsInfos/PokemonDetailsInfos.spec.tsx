import * as React from 'react';
import {render} from '@testing-library/react-native';
import {PokemonDetailsInfos} from '~/components/PokemonDetailsInfos';

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

describe('Render PokemonDetailsInfos', () => {
  it('Should be PokemonDetailsInfos exist', () => {
    const {getByTestId} = render(<PokemonDetailsInfos />);
    const currentElement = getByTestId(`PokemonDetailsInfos`);
    expect(currentElement).toBeTruthy();
  });
  it('Should be PokemonDetailsHeader exist with correct props', () => {
    const {pokemonDetailsMock} = require('~/@mocks/pokemonDetails');
    const {getByTestId, getAllByTestId} = render(<PokemonDetailsInfos />);
    const currentElement = getByTestId(`PokemonDetailsInfos`);
    expect(currentElement).toBeTruthy();
    const weightElement = getByTestId(`PokemonDetailsInfos:Weight`);
    expect(weightElement).toBeTruthy();
    expect(weightElement.props.children).toBe('69 kg');
    const heightElement = getByTestId(`PokemonDetailsInfos:Height`);
    expect(heightElement).toBeTruthy();
    expect(heightElement.props.children).toBe('7 m');
    const moveElement = getByTestId(`PokemonDetailsInfos:Move`);
    expect(moveElement).toBeTruthy();
    expect(moveElement.props.children).toBe('razor-wind');
    const statsElementsName = getAllByTestId('PokemonDetailsInfos:Stats:Name');
    expect(statsElementsName).toBeTruthy();
    expect(statsElementsName).toHaveLength(pokemonDetailsMock.stats.length);
    expect(statsElementsName[0].props.children).toBe('hp');
    expect(statsElementsName[1].props.children).toBe('attack');
    expect(statsElementsName[2].props.children).toBe('defense');
    expect(statsElementsName[3].props.children).toBe('special-attack');
    expect(statsElementsName[4].props.children).toBe('special-defense');
    expect(statsElementsName[5].props.children).toBe('speed');
    const statsElementsInfos = getAllByTestId(
      'PokemonDetailsInfos:Stats:Infos'
    );
    expect(statsElementsInfos).toBeTruthy();
    expect(statsElementsInfos).toHaveLength(pokemonDetailsMock.stats.length);
    expect(statsElementsInfos[0].props.children).toBe(45);
    expect(statsElementsInfos[1].props.children).toBe(49);
    expect(statsElementsInfos[2].props.children).toBe(49);
    expect(statsElementsInfos[3].props.children).toBe(65);
    expect(statsElementsInfos[4].props.children).toBe(65);
    expect(statsElementsInfos[5].props.children).toBe(45);
  });
});
