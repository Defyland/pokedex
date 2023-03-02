import {ISubheader} from '~/components/Subheader/data/interfaces';

export const useSubheader = (
  props: ISubheader.ModelProps
): ISubheader.Model => {
  return {
    ...props,
  };
};
