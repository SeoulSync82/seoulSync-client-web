import { PlaceItemType } from '@/api/course/types';

export type TabItemType = {
  active: boolean;
  title: string;
};

export type TabGroupPropsType = {
  items: Array<TabItemType>;
  click?: (item: TabItemType) => void;
};

export type CustomCourseListItemType = {
  place: PlaceItemType;
  deleteClick: (item: PlaceItemType) => void;
  openClick: (item: PlaceItemType) => void;
};

export type AddCustomPlaceItemPropsType = {
  click: () => void;
};
