import * as React from 'react';
import {Icon} from '~/components/Basics';
import {IPokemonDetailsHeader} from '~/components/PokemonDetailsHeader/data/interfaces';
import {usePokemonDetailsHeader} from '~/components/PokemonDetailsHeader/data/model';
import S from './styles';

export const PokemonDetailsHeader = (props: IPokemonDetailsHeader.View) => {
  const {pokemonDetails, goBack, pokemonImg} = usePokemonDetailsHeader(props);

  return (
    <S.Container testID="PokemonDetailsHeader">
      <S.Content>
        <S.Infos>
          <S.BackButton testID="PokemonDetailsHeader:Press" onPress={goBack}>
            <Icon
              size={30}
              name="arrow-back-sharp"
              lib="Ionicons"
              color="white"
            />
          </S.BackButton>
          <S.Number testID="PokemonDetailsHeader:Id">{`#${pokemonDetails.id}`}</S.Number>
          <S.Name testID="PokemonDetailsHeader:Name">
            {pokemonDetails.name}
          </S.Name>
          {pokemonDetails.types.map((item, index) => (
            <S.TypeContent key={index}>
              <S.Type testID="PokemonDetailsHeader:TypeName">
                {item.type.name}
              </S.Type>
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
