import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
export const userAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getUserProfile = () => {
    return _network.get('/user/profile');
  };

  return { getUserProfile };
};
