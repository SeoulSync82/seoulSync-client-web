import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type {
  GetAdditionalPlaceParamsType,
  CourseItemType,
  GetRecommendCourseParamsType,
  PlaceItemType,
} from '@/api/course/types';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import { camelToSnake, snakeToCamel } from '@/utils/commons/notation';

const coursePaths = {
  course: (uuid: string) => `/course/${uuid}`,
  getRecommendCourse: '/course/recommend',
  getAdditionalPlace: '/course/place/customize',
  createCourse: '/course/recommend/save',
};

export const courseAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getCourse = async (uuid: string) => {
    const response = _network.get(coursePaths.course(uuid));
    let result: CourseItemType = {
      courseUuid: '',
      courseName: '',
      subway: { uuid: '', station: '' },
      isPosted: false,
      isBookmarked: false,
      createdAt: new Date(),
      line: [],
      theme: { id: 0, themeName: '', uuid: '' },
      places: [],
    };
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<CourseItemType> = {
        status: res.statusText,
        items: res.data.items,
      };
      result = snakeToCamel(apiResponse.items);
      if (result.createdAt) {
        result.createdAt = new Date(Date.parse(result.createdAt as string));
      }
      result.places = result.places.map((item) => {
        return { ...item, open: false };
      });
    });
    return result;
  };

  const getRecommendCourse = async (
    params: GetRecommendCourseParamsType,
  ): Promise<CourseItemType> => {
    const response = _network.get(coursePaths.getRecommendCourse, camelToSnake(params));
    let result: CourseItemType = {
      courseUuid: '',
      courseName: '',
      subway: { uuid: '', station: '' },
      line: [],
      theme: { id: 0, themeName: '', uuid: '' },
      places: [],
    };
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<CourseItemType> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = snakeToCamel(apiResponse.items);
      result.places = result.places.map((item) => {
        return { ...item, open: false };
      });
    });
    return result;
  };

  const getAdditionalPlace = async (params: GetAdditionalPlaceParamsType) => {
    const response = _network.get(coursePaths.getAdditionalPlace, camelToSnake(params));
    let result: PlaceItemType = {
      sort: 0,
      uuid: '',
      placeName: '',
      placeType: '',
      thumbnail: '',
      address: '',
      latitude: '',
      longitude: '',
      score: '',
      placeDetail: '',
      open: false,
    };
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<PlaceItemType> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = snakeToCamel(apiResponse.items);
      result = { ...result, open: false, sort: 0 };
    });
    return result;
  };

  const createCourse = async (params: CourseItemType) => {
    const response = _network.post(coursePaths.createCourse, camelToSnake(params));
    let result: string = '';
    await response.then((res: AxiosResponse<any, any>) => {
      const apiResponse: baseAPIType<string> = {
        status: res.statusText,
        items: res.data.items,
      };

      result = apiResponse.items;
    });
    return result;
  };

  return { getRecommendCourse, getAdditionalPlace, createCourse, getCourse };
};
