import { subwayLineItemType } from '@/api/subway/types';

export type tabItemType = {
  active: boolean;
  title: string;
};

export type tabGroupPropsType = {
  items: Array<tabItemType>;
  click?: (item: tabItemType) => void;
};

export type selectSubwayPropsType = {
  lineList: Array<subwayLineItemType>;
  subwayList: Array<string>;
  click: (item: subwayLineItemType) => void;
};
