import {useEffect, useState} from 'react';
import {IHome} from '~/pages/Home/data/interfaces';
import {useDispatch} from '~/utils';
import {pokemonsFetch} from '~/redux/reducers/Pokemon';

export const useHome = (): IHome.Model => {
  const dispatch = useDispatch();
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    dispatch(
      pokemonsFetch({
        url: undefined,
      })
    );

    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return {
    showSplash,
  };
};
