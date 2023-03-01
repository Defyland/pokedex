import * as React from 'react';
import {Icon} from '~/components/Basics';
import {IPokemonDetailsHeader} from '~/components/PokemonDetailsHeader/data/interfaces';
import {usePokemonDetailsHeader} from '~/components/PokemonDetailsHeader/data/model';
import S from './styles';

export const PokemonDetailsHeader = (props: IPokemonDetailsHeader.View) => {
  const {pokemonDetails, goBack, pokemonImg} = usePokemonDetailsHeader(props);

  return (
    <S.Container>
      <S.Content>
        <S.Infos>
          <S.BackButton onPress={goBack}>
            <Icon
              size={30}
              name="arrow-back-sharp"
              lib="Ionicons"
              color="white"
            />
          </S.BackButton>
          <S.Number>{`#${pokemonDetails.id}`}</S.Number>
          <S.Name>{pokemonDetails.name}</S.Name>
          {pokemonDetails.types.map((item, index) => (
            <S.TypeContent key={index}>
              <S.Type>{item.type.name}</S.Type>
            </S.TypeContent>
          ))}
        </S.Infos>
        <S.PokemonImage>
          <S.Image source={{uri: pokemonImg}} />
        </S.PokemonImage>
      </S.Content>
    </S.Container>
  );
};
