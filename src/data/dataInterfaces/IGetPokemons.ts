import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetPokemonsRequest} from '~/data/models';

export interface IGetPokemons {
  send(params: IGetPokemons.Params): Promise<IGetPokemons.Response>;
}

export namespace IGetPokemons {
  export type Params = {
    url?: string;
  };

  export type Response = IBaseResponse & {
    data: IGetPokemonsRequest;
  };
}
