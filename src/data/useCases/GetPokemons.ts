import {HttpClient, HttpStatusCode} from '~/utils/api';
import {API_URL} from '~/configs/constants';
import {IGetPokemons} from '~/data/dataInterfaces';
import {IGetPokemonsRequest} from '~/data/models';

export class GetPokemons implements IGetPokemons {
  constructor(private readonly httpClient: HttpClient<IGetPokemonsRequest>) {}

  async send({
    url = API_URL,
  }: IGetPokemons.Params): Promise<IGetPokemons.Response> {
    const httpResponse = await this.httpClient.request({
      url,
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
