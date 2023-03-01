import * as React from 'react';
import {IPokeballBackground} from '~/components/PokeballBackground/data/interfaces';
import {usePokeballBackground} from '~/components/PokeballBackground/data/model';
import S from './styles';

export const PokeballBackground = (props: IPokeballBackground.View) => {
  const {color, size} = usePokeballBackground(props);
  return <S.Image {...{size, color}} style={{tintColor: color}} />;
};
