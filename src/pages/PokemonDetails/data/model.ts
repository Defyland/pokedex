import {IPokemonDetails} from '~/pages/PokemonDetails/data/interfaces';
import {useNavigation} from '@react-navigation/native';
import {setPokemonOnBackpack} from '~/redux/reducers/Backpack';
import {RootState, useSelector, useDispatch} from '~/utils';

export const usePokemonDetails = (): IPokemonDetails.Model => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const {
    Backpack: {pokemons},
    PokemonDetail: {isLoading, color: bgColor},
  } = useSelector((state: RootState) => state);

  function goBack() {
    return navigate.goBack();
  }

  console.log({pokemons});

  function catchPokemon() {
    return dispatch(setPokemonOnBackpack('renan'));
  }

  return {
    goBack,
    bgColor,
    isLoading,
    catchPokemon,
  };
};
