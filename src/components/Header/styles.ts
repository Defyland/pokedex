import styled from 'styled-components/native';

export default {
  Container: styled.View`
    margin-bottom: ${({theme}) => theme.space[1]}px;
    margin: 0px ${({theme}) => theme.space[1]}px
      ${({theme}) => theme.space[1]}px ${({theme}) => theme.space[1]}px;
  `,
  Title: styled.Text`
    margin-bottom: ${({theme}) => theme.space[2]}px;
    font-size: ${({theme}) => theme.space[4]}px;
    font-weight: bold;
    text-transform: capitalize;
  `,
  Input: styled.TextInput`
    height: 44px;
    border-bottom-width: ${1 / 3}px;
  `,
};
