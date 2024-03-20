import { subwayAPI } from '@/api/subway';
import type { subwayLineItemType } from '@/api/subway/types';
import SelectSubway from '@/components/organism/SelectSubway';
import SelectTheme from '@/components/organism/SelectTheme';
import TabGroup from '@/components/molecules/TabGroup';
import type { tabItemType } from '@/components/molecules/types';
import Button from '@/components/atoms/Button';
import Header from '@/components/layouts/Header';
import { useEffect, useState } from 'react';
import type { themeItem } from '@/api/theme/types';
import { themeAPI } from '@/api/theme';
import Loader from '@/components/atoms/Loader';

const AIRecommend = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedSubwayLine, setSelectedSubwayLine] = useState<subwayLineItemType>({
    uuid: '',
    line: '',
  });

  const [selectedSubwayItem, setSelectedSubwayItem] = useState<string>('');

  const [tabItems, setActivePage] = useState<Array<tabItemType>>([
    { active: true, title: '역주변' },
    { active: false, title: '테마선택' },
    { active: false, title: '커스텀' },
  ]);
  const [selectedTab, setSelectedTab] = useState<string>('역주변');
  const [subwayLine, setSubwayLine] = useState<Array<subwayLineItemType>>([]);
  const [subwayList, setSubwayList] = useState<Array<string>>([]);
  const [themeList, setThemeList] = useState<Array<themeItem>>([]);
  const [selectedThemeItem, setSelectedThemeItem] = useState<themeItem>({
    id: 0,
    uuid: '',
    themeName: '',
  });
  // const onClickTab = (item: tabItemType) => {
  //   const temp = tabItems.map((value) => {
  //     if (item.title === value.title) {
  //       return {
  //         active: true,
  //         title: value.title,
  //       };
  //     } else {
  //       return {
  //         active: false,
  //         title: value.title,
  //       };
  //     }
  //   });
  //   setActivePage(temp);
  // };

  useEffect(() => {
    setSelectedTab(tabItems.filter((item) => item.active === true)[0].title);
  }, [tabItems]);

  useEffect(() => {
    const subway = subwayAPI();
    const theme = themeAPI();
    async function fetchAndSetData() {
      const themeResult = theme.getThemeList();
      const result = await subway.getSubwayLine();
      setSubwayLine(result);
      themeResult.then((data) => {
        setThemeList(data);
      });
      setIsLoading(false);
    }
    fetchAndSetData();
  }, []);

  const onClickSubwayLine = async (item: subwayLineItemType) => {
    const subway = subwayAPI();
    const subwayResult = await subway.getSubwayList({ uuid: item.uuid });
    setSubwayList(subwayResult);
  };

  const onClickButton = () => {
    switch (selectedTab) {
      case '역주변':
        setActivePage((prevTabItems) => [
          { ...prevTabItems[0], active: false },
          { ...prevTabItems[1], active: true },
          { ...prevTabItems[2], active: false },
        ]);
        break;
      case '테마선택':
        setActivePage((prevTabItems) => [
          { ...prevTabItems[0], active: false },
          { ...prevTabItems[1], active: false },
          { ...prevTabItems[2], active: true },
        ]);
        break;
    }
  };

  const setButtonStatus = (): boolean => {
    switch (selectedTab) {
      case '역주변':
        return selectedSubwayItem === '';

      case '테마선택':
        return selectedThemeItem.uuid === '';
      default:
        return false;
    }
  };

  const makePage = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      switch (selectedTab) {
        case '역주변':
          return (
            <SelectSubway
              selectedSubwayItem={selectedSubwayItem}
              selectedSubwayLine={selectedSubwayLine}
              setSelectedSubwayLine={setSelectedSubwayLine}
              setSelectedSubwayItem={setSelectedSubwayItem}
              lineList={subwayLine}
              subwayList={subwayList}
              click={onClickSubwayLine}
            />
          );
        case '테마선택':
          return (
            <SelectTheme
              themeList={themeList}
              selectedThemeItem={selectedThemeItem}
              setSelectedThemeItem={setSelectedThemeItem}
            />
          );
        default:
          return (
            <SelectSubway
              selectedSubwayItem={selectedSubwayItem}
              selectedSubwayLine={selectedSubwayLine}
              setSelectedSubwayLine={setSelectedSubwayLine}
              setSelectedSubwayItem={setSelectedSubwayItem}
              lineList={subwayLine}
              subwayList={subwayList}
              click={onClickSubwayLine}
            />
          );
      }
    }
  };

  return (
    <>
      <div className="page">
        <div className="max-container flex max-h-screen min-h-screen flex-col ">
          <div className="sticky top-0 bg-white">
            <Header />
            <div className="mt-12 h-full">
              <TabGroup items={tabItems} />
            </div>
          </div>
          <div className="">{makePage()}</div>
          <div className="fixed bottom-0 w-full max-w-screen-sm">
            <Button
              click={onClickButton}
              size="large"
              bgColor="primary"
              textColor="white"
              content={'선택하기'}
              disable={setButtonStatus()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRecommend;
