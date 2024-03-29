// @ts-nocheck
import styled from 'styled-components/native';
import {Page, Wrapped} from '~/components/Basics';
import {theme} from '~/styles/theme';

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
    margin-bottom: ${theme.space[1]}px;
    border-radius: ${theme.space[1]}px;
    background-color: ${theme.colors.white};
  `,
  ButtonTitle: styled.Text<{color: string}>`
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    color: ${({color}) => theme.colors[color]};
    font-size: ${theme.fontSizes.big};
  `,
};
