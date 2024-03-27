import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import type {
  GetSubwayCustomPlaceCount,
  APISubwayListParamsType,
  SubwayCustomPlaceCountType,
  subwayItemType,
  subwayLineItemType,
} from '@/api/subway/types';

const subwayPaths = {
  subway: (uuid: string) => `/subway/${uuid}`,
  subwayLine: '/subway/line',
  customPlaceCount: (lineUuid: string, stationUuid: string) =>
    `/subway/${lineUuid}/${stationUuid}/customs-check`,
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

  const getSubwayList = async (params: APISubwayListParamsType): Promise<Array<subwayItemType>> => {
    const response = _network.get(subwayPaths.subway(params.uuid));
    let result: Array<subwayItemType> = [];

    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<Array<subwayItemType>> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = apiResponse.items;
    });

    return result;
  };

  const getSubwayCustomPlaceCount = async (
    params: GetSubwayCustomPlaceCount,
  ): Promise<SubwayCustomPlaceCountType> => {
    const response = _network.get(
      subwayPaths.customPlaceCount(params.lineUuid, params.stationUuid),
    );
    let result: SubwayCustomPlaceCountType = {
      RESTAURANT: 0,
      CAFE: 0,
      BAR: 0,
      SHOPPING: 0,
      CULTURE: 0,
      ENTERTAINMENT: 0,
      EXHIBITION: 0,
      POPUP: 0,
    };

    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<SubwayCustomPlaceCountType> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = apiResponse.items;
    });

    return result;
  };

  return { getSubwayLine, getSubwayList, getSubwayCustomPlaceCount };
};
