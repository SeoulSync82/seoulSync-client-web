import { TabGroupPropsType, TabItemType } from '@/components/molecules/types';
import Tab from '@/components/atoms/Tab';

const TabGroup = ({ items, click }: TabGroupPropsType) => {
  const onClickTab = (item: TabItemType) => {
    if (click) {
      click(item);
    }
  };

  return (
    <div className="flex w-full">
      {items.map((item) => {
        return (
          <div key={item.title} className="flex-1">
            <Tab active={item.active} title={item.title} click={onClickTab} />
          </div>
        );
      })}
    </div>
  );
};
export default TabGroup;
