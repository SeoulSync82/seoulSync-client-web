import { CourseItemType } from '@/api/course/types';
import type { SubwayCustomPlaceCountType } from '@/api/subway/types';

const SET_CUSTOM_PLACE_COUNT = 'ai/customPlaceCount';
const SET_COURSE_DATA = 'ai/courseData';

export type AIState = {
  customPlaceCount: SubwayCustomPlaceCountType;
  course: CourseItemType;
};

export const setCustomPlaceCount = (data: AIState['customPlaceCount']) => ({
  type: SET_CUSTOM_PLACE_COUNT,
  payload: data,
});

export const setCourseData = (data: AIState['course']) => ({
  type: SET_COURSE_DATA,
  payload: data,
});

type AIAction = ReturnType<typeof setCustomPlaceCount> | ReturnType<typeof setCourseData>;

const initialState: AIState = {
  customPlaceCount: {
    RESTAURANT: 0,
    CAFE: 0,
    BAR: 0,
    SHOPPING: 0,
    CULTURE: 0,
    ENTERTAINMENT: 0,
    EXHIBITION: 0,
    POPUP: 0,
  },
  course: {
    courseUuid: '',
    courseName: '',
    subway: { uuid: '', station: '' },
    line: [],
    theme: { id: 0, uuid: '', themeName: '' },
    places: [],
  },
};

const aiReducer = (state: AIState = initialState, action: AIAction) => {
  switch (action.type) {
    case SET_CUSTOM_PLACE_COUNT:
      return {
        ...state,
        customPlaceCount: action.payload,
      };
    case SET_COURSE_DATA:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};

export default aiReducer;
