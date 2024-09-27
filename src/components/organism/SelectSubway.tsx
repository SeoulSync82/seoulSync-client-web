import Button from '../atoms/Button';
import type { SelectSubwayPropsType } from '@/components/organism/types';
import type { ButtonClickPropsType } from '@/components/atoms/types';
import type { subwayItemType } from '@/api/subway/types';

const SelectSubway = ({
  lineList,
  subwayList,
  click,
  setSelectedSubwayLine,
  setSelectedSubwayItem,
  selectedSubwayLine,
  selectedSubwayItem,
}: SelectSubwayPropsType) => {
  const onClickLine = (items: ButtonClickPropsType) => {
    setSelectedSubwayLine({ uuid: items.key, line: items.content });
    click({ uuid: items.key, line: items.content });
  };

  const onClickSubwayItem = (item: subwayItemType) => {
    setSelectedSubwayItem(item);
  };

  const makeLeftContent = () => {
    return lineList.map((item) => {
      if (selectedSubwayLine.uuid === item.uuid) {
        return (
          <Button
            size="small"
            bgColor="gray100"
            textColor="primary"
            border={{ position: 'bottom', size: 'small' }}
            content={item.line}
            key={item.uuid}
            active={true}
            click={() => onClickLine({ key: item.uuid, content: item.line })}
            disable={false}
          />
        );
      } else {
        return (
          <Button
            size="small"
            bgColor="gray100"
            textColor="gray400"
            border={{ position: 'bottom', size: 'small' }}
            content={item.line}
            key={item.uuid}
            click={() => onClickLine({ key: item.uuid, content: item.line })}
            disable={false}
          />
        );
      }
    });
  };

  const makeRightContent = () => {
    return subwayList.map((item) => {
      if (selectedSubwayItem.uuid === item.uuid) {
        return (
          <Button
            size="small"
            bgColor="primary"
            textColor="white"
            active={true}
            border={{ position: 'bottom', size: 'small' }}
            content={item.station}
            key={item.uuid}
            click={() => onClickSubwayItem(item)}
            disable={false}
          />
        );
      } else {
        return (
          <Button
            size="small"
            bgColor="white"
            textColor="gray400"
            border={{ position: 'bottom', size: 'small' }}
            content={item.station}
            key={item.uuid}
            click={() => onClickSubwayItem(item)}
            disable={false}
          />
        );
      }
    });
  };

  return (
    <div className="flex h-full w-full bg-white">
      <div className="hide-scroll flex max-h-[calc(100vh-168px)] grow basis-1/3 flex-col overflow-y-auto ">
        {makeLeftContent()}
      </div>
      <div className="hide-scroll flex max-h-[calc(100vh-168px)] grow basis-2/3 flex-col overflow-y-auto ">
        {makeRightContent()}
      </div>
    </div>
  );
};

export default SelectSubway;
