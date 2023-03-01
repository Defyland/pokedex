import styled from 'styled-components/native';
import {PokeballBackground} from '~/components/PokeballBackground';
import {Wrapped} from '~/components/Basics';
import {metrics} from '~/styles/metrics';

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
    margin: 16px;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.large};
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
    border-radius: ${({theme}) => theme.space[0]}px;
  `,
  AboutInfoTitle: styled.Text`
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.tiny};
  `,
  AboutInfo: styled.Text`
    text-align: center;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.tiny};
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
    border-radius: ${({theme}) => theme.space[0]}px;
  `,
  StatsContentInfos: styled(Wrapped).attrs({
    center: true,
  })`
    flex: 2;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${({theme}) => theme.space[0]}px;
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
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.tiny};
  `,
  StatsInfo: styled.Text`
    text-align: center;
    margin-right: 16px;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.tiny};
  `,
  StatusBar: styled(Wrapped)`
    height: 8px;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.white};
  `,
};
