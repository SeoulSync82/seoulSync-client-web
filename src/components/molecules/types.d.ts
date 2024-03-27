export type TabItemType = {
  active: boolean;
  title: string;
};

export type tabGroupPropsType = {
  items: Array<TabItemType>;
  click?: (item: TabItemType) => void;
};
