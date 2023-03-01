import * as React from 'react';
import {PokeballLoading, PokemonDetailsHeader} from '~/components';
import {usePokemonDetails} from '~/pages/PokemonDetails/data/model';
import S from './styles';

export const PokemonDetails = () => {
  const {pokemonDetails, isLoading, bgColor, goBack} = usePokemonDetails();

  // if (isLoading) {
  //   return (
  //     <S.ContentLoading bg={bgColor}>
  //       <PokeballLoading />
  //     </S.ContentLoading>
  //   );
  // }

  return (
    <S.Container bg={'psychic'}>
      <PokemonDetailsHeader {...{goBack}} />
    </S.Container>
  );
};
