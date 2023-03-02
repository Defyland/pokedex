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

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return {
    showSplash,
  };
};
