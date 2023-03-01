import styled from 'styled-components/native';

import {metrics} from '~/styles/metrics';
import {Wrapped, Linear} from '~/components/Basics';

const cardWidth = metrics.width / 4;

export default {
  Press: styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
  })`
    flex: 1;
  `,
  Linear: styled(Linear).attrs({
    m: 0,
  })`
    height: ${cardWidth}px;
    border-radius: ${({theme}) => theme.space[1]}px;
    flex: 1;
  `,
  Container: styled(Wrapped)`
    flex: 1;
    height: ${cardWidth}px;
  `,
  Pokeball: styled.View`
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -30px 0 0 -30px;
  `,
  PokemonImage: styled.View`
    position: absolute;
    right: -20px;
  `,
  Image: styled.Image`
    width: 120px;
    height: 120px;
  `,
  Name: styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.white};
    text-transform: capitalize;
  `,
  Line: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${({theme}) => theme.space[1]}px;
  `,
  Number: styled.Text`
    font-size: ${({theme}) => theme.fontSizes.tiny};
    font-weight: bold;
    color: ${({theme}) => theme.colors.white};
  `,
  Type: styled.Text`
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => theme.colors.white};
    text-transform: capitalize;
  `,
  TypeContent: styled.View`
    width: 50%;
    padding: ${({theme}) => theme.space[0]}px 0px;
    border-radius: 100px;
    margin-bottom: ${({theme}) => theme.space[0]}px;
    background-color: ${({theme}) => theme.colors.white};
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
  `,
  Infos: styled.View`
    padding: ${({theme}) => theme.space[1]}px;
    width: 60%;
    height: 100%;
    position: absolute;
  `,
};
