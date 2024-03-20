import type { subwayLineItemType } from '@/api/subway/types';
import type { themeItem } from '@/api/theme/types';

export type selectSubwayPropsType = {
  lineList: Array<subwayLineItemType>;
  subwayList: Array<string>;
  click: (item: subwayLineItemType) => void;
  selectedSubwayLine: subwayLineItemType;
  selectedSubwayItem: string;
  setSelectedSubwayLine: (item: subwayLineItemType) => void;
  setSelectedSubwayItem: (item: string) => void;
};

export type selectThemePropsType = {
  themeList: Array<themeItem>;
  selectedThemeItem: themeItem;
  setSelectedThemeItem: (item: themeItem) => void;
};
