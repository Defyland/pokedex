import styled from 'styled-components/native';
import {Page, Wrapped} from '~/components/Basics';

export default {
  Container: styled(Page).attrs({})`
    flex: 1;
  `,
  ContentLoading: styled(Wrapped)`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
};
