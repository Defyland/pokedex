import * as React from 'react';
import {usePokemonDetails} from '~/pages/PokemonDetails/data/model';
import {
  PokeballLoading,
  PokemonDetailsHeader,
  PokemonDetailsInfos,
} from '~/components';
import S from './styles';

export const PokemonDetails = () => {
  const {isLoading, bgColor, goBack, catchPokemon, dropPokemon, canCapture} =
    usePokemonDetails();

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
      <S.Button onPress={canCapture ? catchPokemon : dropPokemon}>
        <S.ButtonTitle color={bgColor}>
          {canCapture ? `catch` : `drop`}
        </S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
};
