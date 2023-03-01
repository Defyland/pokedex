import * as React from 'react';
import {usePokemonDetails} from '~/pages/PokemonDetails/data/model';
import {
  PokeballLoading,
  PokemonDetailsHeader,
  PokemonDetailsInfos,
} from '~/components';
import S from './styles';

export const PokemonDetails = () => {
  const {isLoading, bgColor, goBack} = usePokemonDetails();

  if (isLoading) {
    return (
      <S.ContentLoading bg={bgColor}>
        <PokeballLoading />
      </S.ContentLoading>
    );
  }

  return (
    <S.Container bg={bgColor}>
      <PokemonDetailsHeader {...{goBack}} />
      <PokemonDetailsInfos />
    </S.Container>
  );
};
