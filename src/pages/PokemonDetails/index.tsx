import * as React from 'react';
import {PokeballLoading} from '~/components';
import {usePokemonDetails} from '~/pages/PokemonDetails/data/model';
import S from './styles';

export const PokemonDetails = () => {
  const {pokemonDetails, isLoading, bgColor} = usePokemonDetails();

  if (isLoading) {
    return (
      <S.ContentLoading bg={bgColor}>
        <PokeballLoading />
      </S.ContentLoading>
    );
  }
  return <S.Container bg={bgColor}></S.Container>;
};
