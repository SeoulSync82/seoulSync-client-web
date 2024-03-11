import TabGroup from '@/components/Molecules/TabGroup';
import { tabItemType } from '@/components/Molecules/types';
import Header from '@/components/layouts/Header';
import { useState } from 'react';

const AIRecommend = () => {
  const [tabItems, setActivePage] = useState<Array<tabItemType>>([
    { active: true, title: '역주변' },
    { active: false, title: '테마선택' },
    { active: false, title: '커스텀' },
  ]);

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

  return (
    <>
      <Header />
      <div className="page mt-12">
        <div className="max-container">
          <TabGroup items={tabItems} />
          <p className="text-20 text-red-500">AIRecommend page 입니다.</p>
        </div>
      </div>
    </>
  );
};

export default AIRecommend;
