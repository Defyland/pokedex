import {IBaseResponse} from '~/utils/interfaces/customTypes';
import {IGetPokemonDetailsFullRequest} from '~/data/models';

export interface IGetPokemonDetails {
  send(params: IGetPokemonDetails.Params): Promise<IGetPokemonDetails.Response>;
}

export namespace IGetPokemonDetails {
  export type Params = {
    pokemonUrl: string;
  };

  export type Response = IBaseResponse & {
    data: IGetPokemonDetailsFullRequest;
  };
}
