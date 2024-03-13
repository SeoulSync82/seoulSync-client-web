import { subwayLineItemType } from '@/api/subway/types';
import Button from '../atoms/Button';
import { selectSubwayPropsType } from '@/components/Molecules/types';
import { buttonClickPropsType } from '@/components/atoms/types';
import { useImperativeHandle, useState } from 'react';

const SelectSubway = ({ lineList, subwayList, click }: selectSubwayPropsType) => {
  useImperativeHandle(ref, () => ({
    selectedItem,
  }));

  const [selectedSubwayLine, setSelectedSubwayLine] = useState<subwayLineItemType>({
    uuid: '',
    line: '',
  });

  const [selectedSubwayItem, setSelectedSubwayItem] = useState<string>('');

  const onClickLine = (items: buttonClickPropsType) => {
    setSelectedSubwayLine({ uuid: items.key, line: items.content });
    click({ uuid: items.key, line: items.content });
  };

  const onClickSubwayItem = (item: string) => {
    setSelectedSubwayItem(item);
  };

  const selectedItem = {
    subwayLine: selectedSubwayLine,
    subway: selectedSubwayItem,
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
          />
        );
      }
    });
  };

  const makeRightContent = () => {
    return subwayList.map((item) => {
      if (selectedSubwayItem === item) {
        return (
          <Button
            size="small"
            bgColor="primary"
            textColor="white"
            active={true}
            border={{ position: 'bottom', size: 'small' }}
            content={item}
            key={item}
            click={() => onClickSubwayItem(item)}
          />
        );
      } else {
        return (
          <Button
            size="small"
            bgColor="white"
            textColor="gray400"
            border={{ position: 'bottom', size: 'small' }}
            content={item}
            key={item}
            click={() => onClickSubwayItem(item)}
          />
        );
      }
    });
  };

  return (
    <div className="flex h-full w-full">
      <div className="hide-scroll flex max-h-[calc(100vh-168px)] grow basis-1/3 flex-col overflow-y-auto bg-slate-400">
        {makeLeftContent()}
      </div>
      <div className="hide-scroll flex max-h-[calc(100vh-168px)] grow basis-2/3 flex-col overflow-y-auto">
        {makeRightContent()}
      </div>
    </div>
  );
};

export default SelectSubway;
