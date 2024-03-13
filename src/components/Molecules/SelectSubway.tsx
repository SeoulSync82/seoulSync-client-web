import { subwayLineItemType } from '@/api/subway/types';
import ThinButton from '../atoms/ThinButton';
import { selectSubwayPropsType } from '@/components/Molecules/types';
import { buttonClickPropsType } from '@/components/atoms/types';
import { useState } from 'react';

const SelectSubway = <T,>({ lineList }: selectSubwayPropsType) => {
  const [selectedSubwayLine, setSelectedSubwayLine] = useState<subwayLineItemType>({
    uuid: '',
    line: '',
  });

  const onClickLine = (items: buttonClickPropsType) => {
    setSelectedSubwayLine({ uuid: items.key, line: items.content });
  };

  const makeLeftContent = () => {
    return lineList.map((item) => {
      if (selectedSubwayLine.uuid === item.uuid) {
        return (
          <ThinButton
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
          <ThinButton
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
    const buttons = [];
    for (let i = 0; i < 20; i++) {
      buttons.push(
        <ThinButton
          size="small"
          bgColor="white"
          textColor="gray400"
          border={{ position: 'bottom', size: 'small' }}
          borderColor="gray200"
          content="bb"
          key={i}
        />,
      );
    }
    return buttons;
  };

  return (
    <div className="flex h-full w-full">
      <div className="hide-scroll flex max-h-screen grow basis-1/3 flex-col overflow-y-auto bg-slate-400">
        {makeLeftContent()}
      </div>
      <div className="hide-scroll flex max-h-screen grow basis-2/3 flex-col overflow-y-auto">
        {makeRightContent()}
      </div>
    </div>
  );
};

export default SelectSubway;
