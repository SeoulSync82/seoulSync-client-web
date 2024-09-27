import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import type { themeItem } from '@/api/theme/types';
import { snakeToCamel } from '@/utils/commons/notation';

const themePaths = {
  themeList: '/theme',
};

export const themeAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getThemeList = async (): Promise<Array<themeItem>> => {
    const response = _network.get(themePaths.themeList);

    let result: Array<themeItem> = [];
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<Array<themeItem>> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = snakeToCamel(apiResponse.items);
    });
    return result;
  };

  return { getThemeList };
};
