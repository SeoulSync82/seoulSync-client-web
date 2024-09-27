import { subwayAPI } from '@/api/subway';
import type {
  SubwayCustomPlaceCountType,
  subwayItemType,
  subwayLineItemType,
} from '@/api/subway/types';
import SelectSubway from '@/components/organism/SelectSubway';
import SelectTheme from '@/components/organism/SelectTheme';
import TabGroup from '@/components/molecules/TabGroup';
import type { TabItemType } from '@/components/molecules/types';
import Button from '@/components/atoms/Button';
import Header from '@/components/layouts/Header';
import { useEffect, useState } from 'react';
import type { themeItem } from '@/api/theme/types';
import { themeAPI } from '@/api/theme';
import Loader from '@/components/atoms/Loader';
import SelectCustomCourse from '@/components/organism/MakeCustomCourse';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModal } from '@/reducers/modalReducer';
import { courseAPI } from '@/api/course';
import { setCourseData, setCustomPlaceCount } from '@/reducers/AIReducer';
import { RootState } from '@/reducers';
import { CourseItemType } from '@/api/course/types';
import { useNavigate } from 'react-router';

const AIRecommend = () => {
  const dispatch = useDispatch();
  const course = courseAPI();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const courseData: CourseItemType = useSelector((state: RootState) => state.aiReducer.course);
  const [selectedSubwayLine, setSelectedSubwayLine] = useState<subwayLineItemType>({
    uuid: '',
    line: '',
  });

  const [selectedSubwayItem, setSelectedSubwayItem] = useState<subwayItemType>({
    uuid: '',
    station: '',
  });

  const [tabItems, setActivePage] = useState<Array<TabItemType>>([
    { active: true, title: '역주변' },
    { active: false, title: '테마선택' },
    { active: false, title: '커스텀' },
  ]);
  const [selectedTab, setSelectedTab] = useState<string>('역주변');
  const [subwayLine, setSubwayLine] = useState<Array<subwayLineItemType>>([]);
  const [subwayList, setSubwayList] = useState<Array<subwayItemType>>([]);
  const [themeList, setThemeList] = useState<Array<themeItem>>([]);
  const [selectedThemeItem, setSelectedThemeItem] = useState<themeItem>({
    id: 0,
    uuid: '',
    themeName: '',
  });

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

  const onClickButton = async () => {
    switch (selectedTab) {
      case '역주변':
        setActivePage((prevTabItems) => [
          { ...prevTabItems[0], active: false },
          { ...prevTabItems[1], active: true },
          { ...prevTabItems[2], active: false },
        ]);
        break;
      case '테마선택':
        const subway = subwayAPI();
        const customPlaceCount: SubwayCustomPlaceCountType = await subway.getSubwayCustomPlaceCount(
          {
            lineUuid: selectedSubwayLine.uuid,
            stationUuid: selectedSubwayItem.uuid,
          },
        );
        if (
          customPlaceCount.BAR === 0 &&
          customPlaceCount.CAFE === 0 &&
          customPlaceCount.CULTURE === 0 &&
          customPlaceCount.ENTERTAINMENT === 0 &&
          customPlaceCount.EXHIBITION === 0 &&
          customPlaceCount.POPUP === 0 &&
          customPlaceCount.RESTAURANT === 0 &&
          customPlaceCount.SHOPPING === 0
        ) {
          dispatch(
            setAlertModal({
              opened: true,
              data: {
                title: '선택한 조건에 맞는 코스가 없어요',
                message: '다른 역이나 테마로<br/> 다시 검색 해보시겠어요?',
                messageHTML: true,
              },
            }),
          );
        } else {
          const courseResult = await course.getCourse({
            subwayUuid: selectedSubwayItem.uuid,
            themeUuid: selectedThemeItem.uuid,
          });
          dispatch(setCourseData(courseResult));
          setActivePage((prevTabItems) => [
            { ...prevTabItems[0], active: false },
            { ...prevTabItems[1], active: false },
            { ...prevTabItems[2], active: true },
          ]);
          dispatch(setCustomPlaceCount(customPlaceCount));
        }
        break;
      case '커스텀':
        const courseResult = await course.createCourse({ ...courseData, line: undefined });
        navigate(`/myCourse/detail/${courseResult}`);
        break;
    }
  };

  const setButtonStatus = (): boolean => {
    switch (selectedTab) {
      case '역주변':
        return selectedSubwayItem.uuid === '';

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
        case '커스텀':
          return <SelectCustomCourse />;

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
          <div className="w-full overflow-scroll">{makePage()}</div>
          <div className="fixed bottom-0 w-full max-w-screen-sm">
            <Button
              click={onClickButton}
              size="large"
              bgColor="primary"
              textColor="white"
              content={selectedTab === '커스텀' ? '완료' : '선택하기'}
              disable={setButtonStatus()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRecommend;
