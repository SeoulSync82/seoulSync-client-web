import Chip from '../atoms/Chip';
import type { SelectThemePropsType } from '@/components/organism/types';
import type { themeItem } from '@/api/theme/types';

const SelectTheme = ({
  themeList,
  selectedThemeItem,
  setSelectedThemeItem,
}: SelectThemePropsType) => {
  const onClickTheme = (item: themeItem) => {
    setSelectedThemeItem({ id: item.id, uuid: item.uuid, themeName: item.themeName });
  };

  const onClickChipCancel = () => {
    setSelectedThemeItem({ id: 0, uuid: '', themeName: '' });
  };

  const makeThemeList = () => {
    return themeList.map((item) => {
      return (
        <Chip
          size="medium"
          content={item.themeName}
          key={item.uuid}
          active={selectedThemeItem.uuid === item.uuid}
          click={() => onClickTheme({ id: item.id, uuid: item.uuid, themeName: item.themeName })}
          cancelClick={onClickChipCancel}
        />
      );
    });
  };

  const makeSelectedTheme = () => {
    if (selectedThemeItem.uuid !== '') {
      return (
        <div className="flex h-[60px] w-full basis-1/2 flex-col">
          <p className="font ml-5 flex h-[60px] items-center text-16 font-semibold">
            내가 선택한 테마
          </p>
          <div className="ml-5 flex flex-row flex-wrap gap-2">
            <Chip
              size={'medium'}
              active={true}
              content={selectedThemeItem.themeName}
              cancelClick={onClickChipCancel}
            />
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="flex flex-col">
      {makeSelectedTheme()}
      <div className="h-[60px] w-full basis-1/2 flex-col">
        <p className="font ml-5 flex h-[60px] items-center text-16 font-semibold">테마 선택하기</p>
        <div className="ml-5 flex flex-row flex-wrap gap-2">{makeThemeList()}</div>
      </div>
    </div>
  );
};

export default SelectTheme;
