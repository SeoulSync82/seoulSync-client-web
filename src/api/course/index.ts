import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type {
  GetAdditionalPlaceParamsType,
  CourseItemType,
  GetCourseParamsType,
  PlaceItemType,
  CreateCourseParamsType,
} from '@/api/course/types';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import { camelToSnake, snakeToCamel } from '@/utils/commons/notation';

const coursePaths = {
  course: '/course/recommend',
  getAdditionalPlace: '/course/place/customize',
  createCourse: '/course/recommend/save',
};

export const courseAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getCourse = async (params: GetCourseParamsType): Promise<CourseItemType> => {
    const response = _network.get(coursePaths.course, camelToSnake(params));
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

  const createCourse = async (params: CreateCourseParamsType) => {
    const response = _network.post(coursePaths.createCourse, camelToSnake(params));
  };

  return { getCourse, getAdditionalPlace };
};
