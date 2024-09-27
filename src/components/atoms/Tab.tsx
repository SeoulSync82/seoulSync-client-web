import { TabPropsType } from '@/components/atoms/types';

const Tab = ({ active, title, click }: TabPropsType) => {
  const activeStyle = active ? 'border-b-2 border-gray-900' : 'border-b-[1px] border-gray-300';
  return (
    <div
      className={`flex h-[44px] w-full items-center justify-center ${activeStyle}`}
      onClick={() => {
        if (click) {
          click({ active: active, title: title });
        }
      }}
    >
      <p className={active ? 'font-semibold text-gray-900' : 'font-medium text-gray-300'}>
        {title}
      </p>
    </div>
  );
};

export default Tab;
