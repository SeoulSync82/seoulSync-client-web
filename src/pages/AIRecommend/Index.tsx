import { subwayAPI } from '@/api/subway';
import { subwayLineItemType } from '@/api/subway/types';
import SelectSubway from '@/components/Molecules/SelectSubway';
import TabGroup from '@/components/Molecules/TabGroup';
import { tabItemType } from '@/components/Molecules/types';
import Header from '@/components/layouts/Header';
import { useEffect, useState } from 'react';

const AIRecommend = () => {
  const [tabItems, setActivePage] = useState<Array<tabItemType>>([
    { active: true, title: '역주변' },
    { active: false, title: '테마선택' },
    { active: false, title: '커스텀' },
  ]);

  const [subwayLine, setSubwayLine] = useState<Array<subwayLineItemType>>([]);

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

  const makePage = () => {
    return <SelectSubway lineList={subwayLine} />;
  };

  return (
    <>
      <div className="page">
        <div className="max-container flex flex-col">
          <div className="sticky top-0 bg-white">
            <Header />
            <div className="mt-12 h-full">
              <TabGroup items={tabItems} />
            </div>
          </div>
          <div className="max-h-[90dvh]">{makePage()}</div>
        </div>
      </div>
    </>
  );
};

export default AIRecommend;
