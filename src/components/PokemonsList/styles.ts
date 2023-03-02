import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IPokemonList} from '~/data/models';
import {theme} from '~/styles/theme';

export default {
  List: styled(FlatList as new () => FlatList<IPokemonList>).attrs({
    contentContainerStyle: {
      marginHorizontal: 4,
    },
    style: {
      flex: 1,
    },
  })`
    flex: 1;
  `<React.ElementType>,
  Container: styled.View`
    flex: 1;
  `,
  Text: styled.Text`
    margin-top: ${theme.space[3]}px;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    font-size: ${theme.fontSizes.big};
  `,
};
