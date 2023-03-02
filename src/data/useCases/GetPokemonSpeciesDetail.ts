import {HttpClient, HttpStatusCode} from '~/utils/api';
import {API_URL_SPECIES} from '~/configs/constants';
import {IGetPokemonSpeciesDetail} from '~/data/dataInterfaces';
import {IGetPokemonSpeciesDetailRequest} from '~/data/models';

export class GetPokemonSpeciesDetail implements IGetPokemonSpeciesDetail {
  constructor(
    private readonly httpClient: HttpClient<IGetPokemonSpeciesDetailRequest>
  ) {}

  async send({
    id,
  }: IGetPokemonSpeciesDetail.Params): Promise<IGetPokemonSpeciesDetail.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${API_URL_SPECIES}${id}`,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return {
          status: 'Ok',
          message: '',
          data: httpResponse?.data,
        };
      default:
        throw Error();
    }
  }
}
