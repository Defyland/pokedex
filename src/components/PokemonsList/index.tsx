import * as React from 'react';
import {Header} from '~/components/Header';
import {Conditional} from '~/components/Basics';
import {PokeballLoading} from '~/components/PokeballLoading';
import {usePokemonsList} from '~/components/PokemonsList/data/model';

import S from './styles';

export const PokemonsList = () => {
  const {
    query,
    pokemons,
    isLoading,
    renderItem,
    keyExtractor,
    updatePokemons,
    searchPokemons,
  } = usePokemonsList();

  return (
    <S.Container>
      <Header />
      <Conditional render={query !== ''}>
        <S.List
          numColumns={2}
          data={searchPokemons}
          extraData={searchPokemons}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
        <S.List
          numColumns={2}
          data={pokemons}
          extraData={pokemons}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          keyExtractor={keyExtractor}
          onEndReached={updatePokemons}
          ListFooterComponent={() => {
            if (!isLoading) return null;
            return <PokeballLoading />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </Conditional>
    </S.Container>
  );
};
