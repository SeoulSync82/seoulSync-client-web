import config from '@/config';
import AxiosHelper from '@/utils/network/axiosHelper';
import type { CourseItemType, GetCourseParamsType } from '@/api/course/types';
import type { baseAPIType } from '@/api/types';
import { AxiosResponse } from 'axios';
import { snakeToCamel } from '@/utils/commons/notation';

const coursePaths = {
  course: '/course/recommend',
};

export const courseAPI = () => {
  const BASE_URL = config.api.default;
  const _network = AxiosHelper()
    .setAuthorization(localStorage.getItem('access_token'))
    .setBaseUrl(BASE_URL)
    .build();

  const getCourse = async (params: GetCourseParamsType): Promise<CourseItemType> => {
    const response = _network.get(coursePaths.course, {
      subway_uuid: params.subwayUuid,
      theme_uuid: params.themeUuid,
    });
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
    });
    return result;
  };

  return { getCourse };
};
