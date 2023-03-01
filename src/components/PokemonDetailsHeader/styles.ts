import styled from 'styled-components/native';
import {Wrapped} from '~/components/Basics';
import {metrics} from '~/styles/metrics';

const pokemonSize = metrics.width / 3;

export default {
  Container: styled(Wrapped)``,
  Content: styled(Wrapped)`
    flex-direction: row;
  `,
  Infos: styled.View`
    flex: 1;
  `,
  PokemonImage: styled(Wrapped)``,
  Image: styled.Image`
    width: ${pokemonSize}px;
    height: ${pokemonSize}px;
  `,
  BackButton: styled(Wrapped).attrs({
    activeOpacity: 0.6,
  })`
    width: 50px;
    height: 50px;
    justify-content: center;
  `,
  Number: styled.Text`
    font-weight: bold;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.xsmall};
  `,
  Name: styled.Text`
    margin-bottom: ${({theme}) => theme.space[2]}px;
    font-weight: bold;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.xlarge};
  `,
  Type: styled.Text`
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.small};
  `,
  TypeContent: styled(Wrapped).attrs({
    py: 1,
    mb: 0,
    center: true,
  })`
    width: 50%;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 0.2);
  `,
};
