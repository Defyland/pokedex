import {IPokemonDetails} from '~/pages/PokemonDetails/data/interfaces';
import {useNavigation} from '@react-navigation/native';
import {RootState, useSelector, useDispatch} from '~/utils';

export const usePokemonDetails = (): IPokemonDetails.Model => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const {
    pokemonDetails,
    isLoading,
    color: bgColor,
  } = useSelector((state: RootState) => state.PokemonDetail);

  function goBack() {
    return navigate.goBack();
  }

  return {
    goBack,
    bgColor,
    isLoading,
    pokemonDetails,
  };
};
