import * as React from 'react';
import {usePokemonDetailsInfos} from '~/components/PokemonDetailsInfos/data/model';
import S from './styles';

export const PokemonDetailsInfos = () => {
  const {pokemonDetails} = usePokemonDetailsInfos();
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Title>{`Groups`}</S.Title>
          <S.AboutContainer>
            {pokemonDetails.egg_groups.map(group => (
              <S.AboutContent>
                <S.AboutInfo>{`${group.name}`}</S.AboutInfo>
              </S.AboutContent>
            ))}
          </S.AboutContainer>
          <S.Title>{`About`}</S.Title>
          <S.AboutContainer>
            <S.AboutContent>
              <S.AboutInfo>{`${pokemonDetails.weight} kg`}</S.AboutInfo>
              <S.AboutInfoTitle>{`Weight`}</S.AboutInfoTitle>
            </S.AboutContent>
            <S.AboutContent>
              <S.AboutInfo>{`${pokemonDetails.height} m`}</S.AboutInfo>
              <S.AboutInfoTitle>{`Height`}</S.AboutInfoTitle>
            </S.AboutContent>
            <S.AboutContent>
              <S.AboutInfo>{`${pokemonDetails.moves[0].move.name}`}</S.AboutInfo>
              <S.AboutInfoTitle>{`Move`}</S.AboutInfoTitle>
            </S.AboutContent>
          </S.AboutContainer>
          <S.Title>{`Stats`}</S.Title>
          {pokemonDetails.stats.map((item, index) => (
            <S.Stats key={index}>
              <S.StatsContentName>
                <S.StatsInfoBold>{item.stat.name}</S.StatsInfoBold>
              </S.StatsContentName>
              <S.StatsContentInfos>
                <S.StatsContentInfosDistribution>
                  <S.StatsInfo>{item.base_stat}</S.StatsInfo>
                  <S.StatusBar width={item.base_stat} />
                </S.StatsContentInfosDistribution>
              </S.StatsContentInfos>
            </S.Stats>
          ))}
        </S.Content>
      </S.Container>
      <S.PokeballContent>
        <S.Pokeball />
      </S.PokeballContent>
    </>
  );
};
