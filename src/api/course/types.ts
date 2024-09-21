import type { subwayItemType, subwayLineItemType } from '@/api/subway/types';
import type { themeItem } from '@/api/theme/types';

export type GetCourseParamsType = {
  subwayUuid: string;
  themeUuid: string;
};

export type GetAdditionalPlaceParamsType = {
  placeUuids: Array<string>;
  placeType: PlaceType;
  subwayUuid: string;
  themeUuid: string;
};

export type CourseItemType = {
  courseUuid: string;
  courseName: string;
  subway: subwayItemType;
  line: Array<subwayLineItemType>;
  theme: themeItem;
  places: Array<PlaceItemType>;
};

export enum PlaceType {
  RESTAURANT = '음식점',
  CAFE = '카페',
  BAR = '술집',
  SHOPPING = '쇼핑',
  CULTURE = '문화',
  ENTERTAINMENT = '놀거리',
  EXHIBITION = '전시',
  POPUP = '팝업',
}

export type PlaceItemType = {
  sort: number;
  uuid: string;
  placeName: string;
  placeType: string;
  thumbnail: string;
  address: string;
  latitude: string;
  longitude: string;
  score: string;
  placeDetail: string;
  open: boolean;
};
