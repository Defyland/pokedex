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
    filter,
    setFilter,
    backpackPokemons,
  } = usePokemonsList();

  return (
    <S.Container>
      <Header />
      <S.Filter>
        <S.Button
          isSelected={filter === 'all'}
          onPress={() => setFilter('all')}
        >
          <S.ButtonText>{'All'}</S.ButtonText>
        </S.Button>
        <S.Button
          isSelected={filter === 'catchs'}
          onPress={() => setFilter('catchs')}
        >
          <S.ButtonText>{'Catchs'}</S.ButtonText>
        </S.Button>
      </S.Filter>
      <Conditional render={query !== ''}>
        <Conditional render={filter === 'all'}>
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
            data={backpackPokemons}
            extraData={backpackPokemons}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </Conditional>
        <Conditional render={filter === 'all'}>
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
          <S.List
            numColumns={2}
            data={backpackPokemons}
            extraData={backpackPokemons}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Conditional>
      </Conditional>
    </S.Container>
  );
};
