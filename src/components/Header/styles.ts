import styled from 'styled-components/native';

export default {
  Container: styled.View`
    margin-bottom: 8px;
    margin: 0px 8px 8px 8px;
  `,
  Title: styled.Text`
    margin-bottom: 16px;
    font-size: 32px;
    font-weight: bold;
    text-transform: capitalize;
  `,
  Input: styled.TextInput`
    height: 44px;
    border-bottom-width: ${1 / 3}px;
  `,
};
