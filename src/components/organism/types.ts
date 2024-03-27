import { CourseItemType } from '@/api/course/types';
import type { subwayItemType, subwayLineItemType } from '@/api/subway/types';
import type { themeItem } from '@/api/theme/types';

export type SelectSubwayPropsType = {
  lineList: Array<subwayLineItemType>;
  subwayList: Array<subwayItemType>;
  click: (item: subwayLineItemType) => void;
  selectedSubwayLine: subwayLineItemType;
  selectedSubwayItem: subwayItemType;
  setSelectedSubwayLine: (item: subwayLineItemType) => void;
  setSelectedSubwayItem: (item: subwayItemType) => void;
};

export type SelectThemePropsType = {
  themeList: Array<themeItem>;
  selectedThemeItem: themeItem;
  setSelectedThemeItem: (item: themeItem) => void;
};

export type MakeCustomCoursePropsType = {
  course: CourseItemType;
  setCourse: (item: CourseItemType) => void;
};
