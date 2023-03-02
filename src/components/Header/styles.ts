import styled from 'styled-components/native';
import {theme as Theme} from '~/styles/theme';

export default {
  Container: styled.View`
    margin-bottom: ${Theme.space[1]}px;
    margin: 0px ${Theme.space[1]}px ${Theme.space[1]}px ${Theme.space[1]}px;
  `,
  Title: styled.Text`
    margin-bottom: ${Theme.space[2]}px;
    font-size: ${Theme.space[4]}px;
    font-weight: bold;
    text-transform: capitalize;
  `,
  Input: styled.TextInput`
    height: 44px;
    border-bottom-width: ${1 / 3}px;
  `,
};
