import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import queryString from 'query-string';

const AxiosHelper = () => {
  let _baseUrl = '';
  let _authorization = '';
  let _instance: Axios;

  // 함수 체이닝 사용
  const setBaseUrl = (url: string) => {
    _baseUrl = url;
    return apiFunctions;
  };

  const setAuthorization = (token: string | null) => {
    _authorization = token ? token : '';
    return apiFunctions;
  };

  const build = () => {
    _instance = axios.create({
      baseURL: _baseUrl,
      withCredentials: true,
      headers: {
        common: {
          Authorization: `Bearer ${_authorization}`,
        },
      },
    });

    return apiFunctions;
  };

  const refreshToken = async () => {
    try {
      const { data, status } = await _instance.post(_baseUrl + '/user/refresh');

      if (status === 500) {
        throw data;
      }

      return data;
    } catch (e) {
      console.log('Error occurred:', e);
      throw e;
    }
  };

  const axiosError = async (error: AxiosError, params?: unknown) => {
    if (error?.response?.status == 401) {
      const { data } = await refreshToken();
      if (data.ok) {
        localStorage.setItem('eid_access_token', data.eid_access_token);
        _instance.defaults.headers.common['Authorization'] = `Bearer ${data.eid_access_token}`;
        return get(error.response.config.url ? error.response.config.url : '', params);
      } else {
        localStorage.removeItem('eid_access_token');
        return;
      }
    }
  };

  const get = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data } = await _instance.get(url, {
        params,
        paramsSerializer: (params) => {
          return queryString.stringify(params);
        },
      });

      return data;
    } catch (e) {
      throw axiosError(e as AxiosError, params);
    }
  };

  const post = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data, status } = await _instance.post(url, params);

      if (status === 500) {
        throw data;
      }

      return data;
    } catch (e) {
      throw axiosError(e as AxiosError, params);
    }
  };

  const apiFunctions = {
    setBaseUrl,
    setAuthorization,
    build,
    get,
    post,
  };

  return apiFunctions;
};

export default AxiosHelper;
