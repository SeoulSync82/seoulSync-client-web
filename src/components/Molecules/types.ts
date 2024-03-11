export type tabItemType = {
  active: boolean;
  title: string;
};
export type tabGroupPropsType = {
  items: Array<tabItemType>;
  click?: (item: tabItemType) => void;
};
