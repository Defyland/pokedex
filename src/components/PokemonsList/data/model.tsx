import * as React from 'react';
import {useCallback, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import escapeRegExp from 'escape-string-regexp';

import {IPokemonList as IPokemonListItem} from '~/data/models';
import {IPokemonsList} from '~/components/PokemonsList/data/interfaces';
import {RootState, useSelector, useDispatch} from '~/utils';
import {pokemonsFetch} from '~/redux/reducers/Pokemon';
import {pokemonDetailsSetColor} from '~/redux/reducers/PokemonDetail';
import {
  pokemonDetailsFetch,
  pokemonDetailsClean,
} from '~/redux/reducers/PokemonDetail';
import {PokemonCard} from '~/components/PokemonCard';

export const usePokemonsList = (): IPokemonsList.Model => {
  const {
    Backpack: {pokemons: backpackPokemons},
    Pokemon: {pokemons: pokemonsState, next, isLoading},
    Search: {query},
  } = useSelector((state: RootState) => state);

  const [filter, setFilter] = useState<'all' | 'catchs'>('all');

  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  function updatePokemons() {
    return dispatch(
      pokemonsFetch({
        url: next,
      })
    );
  }

  function selectedPokemon(pokemon: IPokemonListItem) {
    dispatch(pokemonDetailsClean());
    const color = pokemon?.types[0].type.name;
    dispatch(pokemonDetailsSetColor(color));
    dispatch(pokemonDetailsFetch(pokemon.details));
    return navigate('PokemonDetails');
  }

  const keyExtractor = useCallback(
    (item: IPokemonListItem, index: number) => `${item.name}-${index}`,
    []
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<IPokemonListItem>) => (
      <PokemonCard pokemon={item} selectedPokemon={selectedPokemon} />
    ),
    []
  );

  const match = new RegExp(escapeRegExp(query.trim().toLowerCase()));

  const pokemons = filter === 'all' ? pokemonsState : backpackPokemons;

  const searchPokemons = pokemons.filter(pokemon => {
    return match.test(pokemon.name);
  });

  return {
    query,
    filter,
    pokemons,
    setFilter,
    isLoading,
    renderItem,
    keyExtractor,
    updatePokemons,
    searchPokemons,
    backpackPokemons,
  };
};
