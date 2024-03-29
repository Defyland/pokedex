import {HttpRequest, HttpResponse, HttpClient} from '~/utils/api';

import axios, {AxiosResponse} from 'axios';

export class AxiosHttpClientDefault implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
      message: '',
    };
  }
}

export const AxiosHttpClient = new AxiosHttpClientDefault();
