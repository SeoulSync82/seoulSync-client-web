import type { subwayItemType, subwayLineItemType } from '@/api/subway/types';
import type { themeItem } from '@/api/theme/types';

export type GetCourseParamsType = {
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
};
