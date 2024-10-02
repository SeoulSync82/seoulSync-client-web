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
    const { data } = await _instance.post(_baseUrl + '/user/refresh');
    return data;
  };

  const axiosError = async (error: AxiosError, params?: unknown) => {
    if (error?.response?.status == 401) {
      const { data } = await refreshToken();
      if (data.ok) {
        localStorage.setItem('access_token', data.access_token);
        _instance.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        return await get(error.response.config.url ? error.response.config.url : '', params);
      } else {
        throw error;
      }
    } else {
      throw error;
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
      if (e instanceof AxiosError) {
        return await axiosError(e, params);
      } else {
        throw e;
      }
    }
  };

  const post = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data } = await _instance.post(url, params);

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return await axiosError(e, params);
      } else {
        throw e;
      }
    }
  };

  const put = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data } = await _instance.put(url, params);

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return await axiosError(e, params);
      } else {
        throw e;
      }
    }
  };

  const del = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data } = await _instance.delete(url, {
        params,
        paramsSerializer: (params) => {
          return queryString.stringify(params);
        },
      });

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return await axiosError(e, params);
      } else {
        throw e;
      }
    }
  };

  const patch = async (url: string, params?: unknown): Promise<AxiosResponse> => {
    try {
      const { data } = await _instance.patch(url, params);

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return await axiosError(e, params);
      } else {
        throw e;
      }
    }
  };

  const apiFunctions = {
    setBaseUrl,
    setAuthorization,
    build,
    get,
    post,
    put,
    del,
    patch,
  };

  return apiFunctions;
};

export default AxiosHelper;
