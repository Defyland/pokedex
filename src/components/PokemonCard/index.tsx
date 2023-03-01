import * as React from 'react';
import {PokeballBackground} from '~/components/PokeballBackground';
import {IPokemonCard} from '~/components/PokemonCard/data/interfaces';
import {usePokemonCard} from '~/components/PokemonCard/data/model';
import S from './styles';

export const PokemonCard = (props: IPokemonCard.View) => {
  const {pokemon, bgColor, selectedPokemon} = usePokemonCard(props);
  return (
    <S.Linear color={bgColor}>
      <S.Press onPress={() => selectedPokemon(pokemon.details)}>
        <S.Container>
          <S.Infos>
            <S.Line>
              <S.Name>{pokemon.name}</S.Name>
              <S.Number>{` #${pokemon.id}`}</S.Number>
            </S.Line>
            {pokemon.types.map((item, index) => (
              <S.TypeContent key={index}>
                <S.Type>{item.type.name}</S.Type>
              </S.TypeContent>
            ))}
          </S.Infos>
          <S.Pokeball>
            <PokeballBackground size={60} />
          </S.Pokeball>
          <S.PokemonImage>
            <S.Image source={{uri: pokemon.img}} />
          </S.PokemonImage>
        </S.Container>
      </S.Press>
    </S.Linear>
  );
};
