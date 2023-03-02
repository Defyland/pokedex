import * as React from 'react';
import {useRef} from 'react';
import {IPokeballLoading} from '~/components/PokeballLoading/data/interfaces';
import S from './styles';

export const PokeballLoading = (props: IPokeballLoading.View) => {
  const {size = 100} = props;

  const animation = useRef(null);

  return (
    <S.Container testID="PokeballLoading">
      <S.Lottie
        autoPlay
        ref={animation}
        style={{
          width: size,
          height: size,
          backgroundColor: 'transparent',
        }}
        source={require('~/assets/pokeball.json')}
      />
    </S.Container>
  );
};
