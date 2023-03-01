import * as React from 'react';
import {useHeader} from '~/components/Header/data/model';
import S from './styles';

export const Header = () => {
  const {query, updateQuery} = useHeader();
  return (
    <S.Container>
      <S.Title>{`Pokédex`}</S.Title>
      <S.Input placeholder="Search" value={query} onChangeText={updateQuery} />
    </S.Container>
  );
};
