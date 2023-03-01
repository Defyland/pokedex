import {RootState, useSelector} from '~/utils';

export const usePokemonDetailsInfos = () => {
  const {
    PokemonDetail: {pokemonDetails},
  } = useSelector((state: RootState) => state);

  return {
    pokemonDetails,
  };
};
