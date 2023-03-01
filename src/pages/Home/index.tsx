import * as React from 'react';
import {useHome} from '~/pages/Home/data/model';
import {PokemonsList, PokeballLoading, Conditional} from '~/components';

import S from './styles';

export const Home = () => {
  const {showSplash} = useHome();
  return (
    <S.Container>
      <Conditional render={showSplash}>
        <S.Content>
          <PokeballLoading size={200} />
        </S.Content>
        <PokemonsList />
      </Conditional>
    </S.Container>
  );
};
