import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

interface FetchProps {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  data: Object;
  params?: Object;
}

class Axios {
  // Post
  static async fetch({
    method = 'GET',
    url = '',
    data = {},
    params = {},
  }: FetchProps) {
    var config: AxiosRequestConfig = {
      method: method,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
      data: data,
    };
    if (method == 'GET') {
      config['params'] = params;
    }

    const result = await axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        //   console.log(error);
        return error.response;
      });

    return result;
  }
}

export default Axios;
