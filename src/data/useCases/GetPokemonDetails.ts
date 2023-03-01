import {HttpClient, HttpStatusCode} from '~/utils/api';
import {IGetPokemonDetails} from '~/data/dataInterfaces';
import {IGetPokemonDetailsFullRequest} from '~/data/models';

export class GetPokemonDetails implements IGetPokemonDetails {
  constructor(
    private readonly httpClient: HttpClient<IGetPokemonDetailsFullRequest>
  ) {}

  async send({
    pokemonUrl,
  }: IGetPokemonDetails.Params): Promise<IGetPokemonDetails.Response> {
    const httpResponse = await this.httpClient.request({
      url: `${pokemonUrl}`,
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
