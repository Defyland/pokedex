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
  Filter: styled.View`
    height: 44px;
    margin: 0px ${({theme}) => theme.space[1]}px;
    margin-bottom: ${({theme}) => theme.space[1]}px;
    flex-direction: row;
  `,
  Button: styled(Wrapped)<{isSelected: boolean}>`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-bottom-width: ${({isSelected}) => (isSelected ? 2 : 0)}px;
  `,
  ButtonText: styled.Text``,
};
