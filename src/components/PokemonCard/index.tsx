import * as React from 'react';
import {PokeballBackground} from '~/components/PokeballBackground';
import {IPokemonCard} from '~/components/PokemonCard/data/interfaces';
import {usePokemonCard} from '~/components/PokemonCard/data/model';
import S from './styles';

export const PokemonCard = (props: IPokemonCard.View) => {
  const {pokemon, bgColor, selectedPokemon} = usePokemonCard(props);
  return (
    <S.Linear testID="PokemonCard" color={bgColor}>
      <S.Press
        testID="PokemonCard:Press"
        onPress={() => selectedPokemon(pokemon)}
      >
        <S.Container>
          <S.Infos>
            <S.Line>
              <S.Name testID="PokemonCard:Name">{pokemon.name}</S.Name>
              <S.Number testID="PokemonCard:Id">{` #${pokemon.id}`}</S.Number>
            </S.Line>
            {pokemon.types.map((item, index) => (
              <S.TypeContent key={index}>
                <S.Type testID="PokemonCard:TypeName">{item.type.name}</S.Type>
              </S.TypeContent>
            ))}
          </S.Infos>
          <S.Pokeball>
            <PokeballBackground size={60} />
          </S.Pokeball>
          <S.PokemonImage>
            <S.Image testID="PokemonCard:Image" source={{uri: pokemon.img}} />
          </S.PokemonImage>
        </S.Container>
      </S.Press>
    </S.Linear>
  );
};
