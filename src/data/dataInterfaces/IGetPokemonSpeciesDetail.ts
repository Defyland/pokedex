import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetPokemonSpeciesDetailRequest} from '~/data/models';

export interface IGetPokemonSpeciesDetail {
  send(
    params: IGetPokemonSpeciesDetail.Params
  ): Promise<IGetPokemonSpeciesDetail.Response>;
}

export namespace IGetPokemonSpeciesDetail {
  export type Params = {
    id: number;
  };

  export type Response = IBaseResponse & {
    data: IGetPokemonSpeciesDetailRequest;
  };
}
