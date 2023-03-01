import styled from 'styled-components/native';
import {Page, Wrapped} from '~/components/Basics';
import {IPokemonDetails} from '~/pages/PokemonDetails/data/interfaces';

export default {
  Container: styled(Page).attrs({
    hasScroll: false,
  })`
    flex: 1;
  `,
  ContentLoading: styled(Wrapped)`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
};
