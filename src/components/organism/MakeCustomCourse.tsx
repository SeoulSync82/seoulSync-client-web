import CustomCourseListItem from '@/components/molecules/CustomCourseListItem';
import { CourseItemType, PlaceItemType } from '@/api/course/types';
import AddCustomPlaceItem from '@/components/molecules/AddCustomPlaceItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddPlaceModal,
  setBottomSheetModal,
  setToastModal,
  triggerType,
} from '@/reducers/modalReducer';
import { RootState } from '@/reducers';
import { courseAPI } from '@/api/course';
import { setCourseData } from '@/reducers/AIReducer';

const SelectCustomCourse = () => {
  const dispatch = useDispatch();
  const customPlaceCount = useSelector((state: RootState) => state.aiReducer.customPlaceCount);
  const courseData: CourseItemType = useSelector((state: RootState) => state.aiReducer.course);

  const sortPlaces = (places: Array<PlaceItemType>): Array<PlaceItemType> => {
    let sortedPlaces = places.map((place, index) => {
      place.sort = index + 1;
      return place;
    });
    return sortedPlaces;
  };

  const deleteCustomCoursePlaceItem = (item: PlaceItemType) => {
    dispatch(
      setBottomSheetModal({
        opened: true,
        data: {
          title: '해당 내역을 삭제할까요?',
          item: item,
          useTrigger: true,
        },
        trigger: (value: triggerType) => {
          if (value === 'submit') {
            let placeArray = courseData.places.filter(
              (place) => place.placeName !== item.placeName,
            );
            sortPlaces(placeArray);
            dispatch(setCourseData({ ...courseData, places: placeArray }));
            dispatch(
              setToastModal({ opened: true, data: { title: '선택하신 장소가 삭제되었어요.' } }),
            );
          }
        },
      }),
    );
  };

  const openCustomCoursePlaceItem = (item: PlaceItemType) => {
    dispatch(
      setCourseData({
        ...courseData,
        places: courseData.places.filter((place) => {
          if (place.placeName === item.placeName) {
            place.open = !place.open;
          }
          return place;
        }),
      }),
    );
  };

  const makeCustomCourseList = () => {
    return courseData.places.map((item) => {
      return (
        <CustomCourseListItem
          key={item.uuid}
          place={item}
          deleteClick={deleteCustomCoursePlaceItem}
          openClick={openCustomCoursePlaceItem}
        />
      );
    });
  };

  const onClickAddCustomPlace = () => {
    if (courseData.places.length === 6) {
      dispatch(
        setToastModal({
          opened: true,
          data: { title: '장소는 6개까지가 최대입니다!' },
        }),
      );
      return;
    }
    dispatch(
      setAddPlaceModal({
        opened: true,
        trigger: async (place) => {
          if (place === 'none') {
            dispatch(
              setToastModal({
                opened: true,
                data: { title: '장소 항목을 선택해 주세요!' },
              }),
            );
          } else {
            switch (place) {
              case '음식점':
                if (customPlaceCount?.RESTAURANT === 0) {
                  dispatch(
                    setToastModal({
                      opened: true,
                      data: { title: '앗.. 해당 장소에 적합한 곳이 없어요.' },
                    }),
                  );
                  return;
                } else {
                  const course = courseAPI();
                  let tempPlaces: Array<PlaceItemType> = courseData.places;
                  let placeUuids: Array<string> = [];
                  courseData.places.map((place) => {
                    placeUuids.push(place.uuid);
                  });
                  const additionalPlace = await course.getAdditionalPlace({
                    placeUuids: placeUuids,
                    placeType: 'RESTAURANT',
                    subwayUuid: courseData.subway.uuid,
                    themeUuid: courseData.theme.uuid,
                  });
                  tempPlaces.push(additionalPlace);
                  tempPlaces = sortPlaces(tempPlaces);
                  dispatch(setCourseData({ ...courseData, places: tempPlaces }));
                }
                break;
              case '카페':
                if (customPlaceCount?.CAFE === 0) {
                  dispatch(
                    setToastModal({
                      opened: true,
                      data: { title: '앗.. 해당 장소에 적합한 곳이 없어요.' },
                    }),
                  );
                  return;
                } else {
                  const course = courseAPI();
                  let tempPlaces: Array<PlaceItemType> = courseData.places;
                  let placeUuids: Array<string> = [];
                  courseData.places.map((place) => {
                    placeUuids.push(place.uuid);
                  });
                  const additionalPlace = await course.getAdditionalPlace({
                    placeUuids: placeUuids,
                    placeType: 'CAFE',
                    subwayUuid: courseData.subway.uuid,
                    themeUuid: courseData.theme.uuid,
                  });
                  tempPlaces.push(additionalPlace);
                  tempPlaces = sortPlaces(tempPlaces);
                  dispatch(setCourseData({ ...courseData, places: tempPlaces }));
                }
                break;
            }
          }
        },
      }),
    );
  };

  const makeAddCustomPlaceItem = () => {
    return (
      <div className="my-4">
        <AddCustomPlaceItem click={onClickAddCustomPlace} />
      </div>
    );
  };

  return (
    <div className="w-full max-w-[] overflow-scroll px-5">
      {makeAddCustomPlaceItem()}
      {makeCustomCourseList()}
      <div></div>
    </div>
  );
};
export default SelectCustomCourse;
