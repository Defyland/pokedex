import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IPokemonList} from '~/data/models';
import {Wrapped} from '~/components/Basics';

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
};
