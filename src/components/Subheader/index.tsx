import * as React from 'react';
import {ISubheader} from '~/components/Subheader/data/interfaces';
import {useSubheader} from '~/components/Subheader/data/model';
import S from './styles';

export const Subheader = (props: ISubheader.View) => {
  const {filter, setFilter} = useSubheader(props);
  return (
    <S.Filter>
      <S.Button isSelected={filter === 'all'} onPress={() => setFilter('all')}>
        <S.ButtonText>{'All'}</S.ButtonText>
      </S.Button>
      <S.Button
        isSelected={filter === 'catchs'}
        onPress={() => setFilter('catchs')}
      >
        <S.ButtonText>{'Catchs'}</S.ButtonText>
      </S.Button>
    </S.Filter>
  );
};
