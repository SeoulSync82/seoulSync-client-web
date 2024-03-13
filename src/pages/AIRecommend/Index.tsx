import { subwayAPI } from '@/api/subway';
import { subwayLineItemType } from '@/api/subway/types';
import SelectSubway from '@/components/Molecules/SelectSubway';
import TabGroup from '@/components/Molecules/TabGroup';
import { tabItemType } from '@/components/Molecules/types';
import Button from '@/components/atoms/Button';
import Header from '@/components/layouts/Header';
import { useEffect, useRef, useState } from 'react';

const AIRecommend = () => {
  const selectSubwayRef = useRef<HTMLDivElement | null>(null);

  const [tabItems, setActivePage] = useState<Array<tabItemType>>([
    { active: true, title: '역주변' },
    { active: false, title: '테마선택' },
    { active: false, title: '커스텀' },
  ]);

  const [subwayLine, setSubwayLine] = useState<Array<subwayLineItemType>>([]);
  const [subwayList, setSubwayList] = useState<Array<string>>([]);
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
    const subway = subwayAPI();
    async function fetchAndSetUser() {
      const result = await subway.getSubwayLine();
      setSubwayLine(result);
    }
    fetchAndSetUser();
  }, []);

  const onClickSubwayLine = async (item: subwayLineItemType) => {
    const subway = subwayAPI();
    const result = await subway.getSubwayList({ uuid: item.uuid });
    setSubwayList(result);
  };

  const makePage = () => {
    return (
      <SelectSubway
        ref={selectSubwayRef}
        lineList={subwayLine}
        subwayList={subwayList}
        click={onClickSubwayLine}
      />
    );
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
          <div className="fixed bottom-0 w-full">
            <Button size="large" bgColor="primary" textColor="white" content={'선택하기'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRecommend;
