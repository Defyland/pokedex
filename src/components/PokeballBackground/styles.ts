import styled from 'styled-components/native';
import {IPokeballBackground} from '~/components/PokeballBackground/data/interfaces';
import PBIMAGE from '~/assets/pokeball.png';

export default {
  Image: styled.Image.attrs({
    source: PBIMAGE,
  })<IPokeballBackground.IPokemonImage>`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    opacity: 0.1;
  `,
};
