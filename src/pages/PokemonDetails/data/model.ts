import {IPokemonDetails} from '~/pages/PokemonDetails/data/interfaces';
import {RootState, useSelector, useDispatch} from '~/utils';

export const usePokemonDetails = (): IPokemonDetails.Model => {
  const dispatch = useDispatch();

  const {
    pokemonDetails,
    isLoading,
    color: bgColor,
  } = useSelector((state: RootState) => state.PokemonDetail);

  return {
    bgColor,
    isLoading,
    pokemonDetails,
  };
};
