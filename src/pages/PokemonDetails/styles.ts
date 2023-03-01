import styled from 'styled-components/native';
import {Page, Wrapped} from '~/components/Basics';

export default {
  Container: styled(Page).attrs({
    mx: 2,
  })`
    flex: 1;
  `,
  ContentLoading: styled(Wrapped)`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  Button: styled(Wrapped)`
    height: 44px;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({theme}) => theme.space[1]}px;
    border-radius: ${({theme}) => theme.space[1]}px;
    background-color: ${({theme}) => theme.colors.white};
  `,
  ButtonTitle: styled.Text`
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.fire};
    font-size: ${({theme}) => theme.fontSizes.big};
  `,
};
