import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import { subwayLineItemType } from '@/api/subway/types';
export const subwayAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getSubwayLine = async (): Promise<Array<subwayLineItemType>> => {
    const response = _network.get('/subway/line');

    let result: Array<subwayLineItemType> = [];
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<Array<subwayLineItemType>> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = apiResponse.items;
    });
    return result;
  };

  return { getSubwayLine };
};
