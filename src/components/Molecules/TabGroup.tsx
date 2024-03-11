import { tabGroupPropsType } from '@/components/Molecules/types';
import Tab from '../atoms/tab';

const TabGroup = ({ items }: tabGroupPropsType) => {
  return (
    <div className="flex w-full">
      {items.map((item) => {
        return (
          <div className="flex-1">
            <Tab active={item.active} title={item.title} />
          </div>
        );
      })}
    </div>
  );
};
export default TabGroup;
