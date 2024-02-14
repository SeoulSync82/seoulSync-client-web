import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
export const userAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper().setBaseUrl(BASE_URL).build();

  const getGoogleLogin = () => {
    return _network.get('/user/login/google');
  };

  return { getGoogleLogin };
};
