import {RootState, useSelector} from '~/utils';
import {API_IMAGE_URL} from '~/configs/constants';
import {IPokemonDetailsHeader} from '~/components/PokemonDetailsHeader/data/interfaces';

export const usePokemonDetailsHeader = (
  props: IPokemonDetailsHeader.ModelProps
): IPokemonDetailsHeader.Model => {
  const {
    PokemonDetail: {pokemonDetails},
  } = useSelector((state: RootState) => state);

  const pokemonImg = `${API_IMAGE_URL}${pokemonDetails.id}.png`;

  return {
    ...props,
    pokemonImg,
    pokemonDetails,
  };
};
