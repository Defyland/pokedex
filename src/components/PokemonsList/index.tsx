import * as React from 'react';
import {Header} from '~/components/Header';
import {Subheader} from '~/components/Subheader';
import {Conditional} from '~/components/Basics';
import {PokeballLoading} from '~/components/PokeballLoading';
import {usePokemonsList} from '~/components/PokemonsList/data/model';

import S from './styles';

export const PokemonsList = () => {
  const {
    query,
    filter,
    setFilter,
    isLoading,
    renderItem,
    keyExtractor,
    updatePokemons,
    searchPokemons,
  } = usePokemonsList();

  return (
    <S.Container testID="PokemonsList">
      <Header />
      <Subheader {...{filter, setFilter}} />
      <Conditional render={query === '' && filter === 'all'}>
        <S.List
          numColumns={2}
          data={searchPokemons}
          extraData={searchPokemons}
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
          data={searchPokemons}
          extraData={searchPokemons}
          renderItem={renderItem}
          ListEmptyComponent={<S.Text>Not Fount</S.Text>}
          showsVerticalScrollIndicator={false}
        />
      </Conditional>
    </S.Container>
  );
};
