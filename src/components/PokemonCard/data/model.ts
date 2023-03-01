import {IPokemonCard} from '~/components/PokemonCard/data/interfaces';
import {theme} from '~/styles/theme';

export const usePokemonCard = (
  props: IPokemonCard.ModelProps
): IPokemonCard.Model => {
  const {pokemon} = props;
  type IColors = typeof theme.colors;
  const bgColor = theme.colors[pokemon.types[0].type.name as keyof IColors];
  return {
    ...props,
    pokemon,
    bgColor,
  };
};
