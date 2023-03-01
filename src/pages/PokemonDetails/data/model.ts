import {IPokemonDetails} from '~/pages/PokemonDetails/data/interfaces';
import {useNavigation} from '@react-navigation/native';
import {setPokemonOnBackpack} from '~/redux/reducers/Backpack';
import {RootState, useSelector, useDispatch} from '~/utils';

export const usePokemonDetails = (): IPokemonDetails.Model => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const {
    Backpack: {pokemons},
    Pokemon: {pokemons: simplePokemons},
    PokemonDetail: {pokemonDetails, isLoading, color: bgColor},
  } = useSelector((state: RootState) => state);

  function goBack() {
    return navigate.goBack();
  }

  const canCapture = !Boolean(
    pokemons.find(pokemon => pokemon.id === pokemonDetails.id)
  );

  function catchPokemon() {
    const pokemonToSave = simplePokemons.find(
      pokemon => pokemon.id === pokemonDetails.id
    );
    const newPokemons = [...pokemons, pokemonToSave];
    return dispatch(setPokemonOnBackpack(newPokemons));
  }

  function dropPokemon() {
    const pokemonToSave = pokemons.filter(
      pokemon => pokemon.id !== pokemonDetails.id
    );
    return dispatch(setPokemonOnBackpack(pokemonToSave));
  }

  return {
    goBack,
    bgColor,
    isLoading,
    canCapture,
    catchPokemon,
    dropPokemon,
  };
};
