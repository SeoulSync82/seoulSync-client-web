import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import type { APISubwayListParamsType, subwayLineItemType } from '@/api/subway/types';

const subwayPaths = {
  subway: (uuid: string) => `/subway/${uuid}`,
  subwayLine: '/subway/line',
};

export const subwayAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getSubwayLine = async (): Promise<Array<subwayLineItemType>> => {
    const response = _network.get(subwayPaths.subwayLine);

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

  const getSubwayList = async (params: APISubwayListParamsType): Promise<Array<string>> => {
    const response = _network.get(subwayPaths.subway(params.uuid));
    let result: Array<string> = [];

    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<Array<string>> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = apiResponse.items;
    });

    return result;
  };

  return { getSubwayLine, getSubwayList };
};
