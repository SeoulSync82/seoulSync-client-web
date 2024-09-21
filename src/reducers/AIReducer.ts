import type { SubwayCustomPlaceCountType } from '@/api/subway/types';

const SET_CUSTOM_PLACE_COUNT = 'ai/customPlaceCount';

export type AIState = {
  customPlaceCount: SubwayCustomPlaceCountType;
};

export const setCustomPlaceCount = (data: AIState['customPlaceCount']) => ({
  type: SET_CUSTOM_PLACE_COUNT,
  payload: data,
});

type AIAction = ReturnType<typeof setCustomPlaceCount>;

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
};

const aiReducer = (state: AIState = initialState, action: AIAction) => {
  switch (action.type) {
    case SET_CUSTOM_PLACE_COUNT:
      return {
        ...state,
        customPlaceCount: action.payload,
      };
    default:
      return state;
  }
};

export default aiReducer;
