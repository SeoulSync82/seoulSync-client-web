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
};

export type AddCustomPlaceItemPropsType = {
  click: () => void;
};
