import {IPokeballBackground} from '~/components/PokeballBackground/data/interfaces';

export const usePokeballBackground = ({
  color = '#FFF',
  size = 200,
}: IPokeballBackground.ModelProps): IPokeballBackground.Model => {
  return {
    color,
    size,
  };
};
