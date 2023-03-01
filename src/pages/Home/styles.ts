import styled from 'styled-components/native';
import {Page} from '~/components/Basics';

export default {
  Container: styled(Page).attrs({
    hasScroll: false,
  })`
    flex: 1;
  `,
  Content: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
};
