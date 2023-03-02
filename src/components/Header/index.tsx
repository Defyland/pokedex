import * as React from 'react';
import {useHeader} from '~/components/Header/data/model';
import S from './styles';

export const Header = () => {
  const {query, updateQuery} = useHeader();
  return (
    <S.Container testID="Header">
      <S.Title testID="Header:Title">{`Pokédex`}</S.Title>
      <S.Input
        testID="Header:Search"
        placeholder="Search"
        value={query}
        onChangeText={updateQuery}
      />
    </S.Container>
  );
};
