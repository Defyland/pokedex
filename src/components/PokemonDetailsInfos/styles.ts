import styled from 'styled-components/native';
import {PokeballBackground} from '~/components/PokeballBackground';
import {Wrapped} from '~/components/Basics';
import {metrics} from '~/styles/metrics';
import {theme} from '~/styles/theme';

const pokeballWidth = metrics.width;

export default {
  Container: styled(Wrapped)`
    flex: 1;
  `,
  Content: styled(Wrapped)`
    flex: 1;
  `,
  PokeballContent: styled(Wrapped)`
    opacity: 0.6;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -${pokeballWidth / 2}px 0 0 -${pokeballWidth / 2}px;
  `,
  Pokeball: styled(PokeballBackground).attrs({size: pokeballWidth})``,
  Title: styled.Text`
    margin: ${theme.space[2]}px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.large};
  `,
  AboutContainer: styled(Wrapped).attrs({
    mb: 2,
  })`
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
  `,
  AboutContent: styled(Wrapped).attrs({
    mx: 0,
  })`
    flex: 1;
    height: 44px;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.space[0]}px;
  `,
  AboutInfoTitle: styled.Text`
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.tiny};
  `,
  AboutInfo: styled.Text`
    text-align: center;
    text-transform: capitalize;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.tiny};
  `,
  Stats: styled(Wrapped).attrs({
    mb: 2,
  })`
    flex-direction: row;
    justify-content: space-between;
  `,
  StatsContentName: styled(Wrapped).attrs({
    mx: 0,
  })`
    flex: 1;
    height: 44px;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.space[0]}px;
  `,
  StatsContentInfos: styled(Wrapped).attrs({
    center: true,
  })`
    flex: 2;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.space[0]}px;
  `,
  StatsContentInfosDistribution: styled(Wrapped)`
    flex-direction: row;
    align-items: center;
    width: 50%;
  `,
  StatsInfoBold: styled.Text`
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.tiny};
  `,
  StatsInfo: styled.Text`
    text-align: center;
    margin-right: ${theme.space[2]}px;
    text-transform: capitalize;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.tiny};
  `,
  StatusBar: styled(Wrapped)`
    height: ${theme.space[1]}px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
  `,
};
