import { MakeCustomCoursePropsType } from '@/components/organism/types';
import CustomCourseListItem from '@/components/molecules/CustomCourseListItem';
import { PlaceItemType } from '@/api/course/types';
import AddCustomPlaceItem from '@/components/molecules/AddCustomPlaceItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddPlaceModal,
  setBottomSheetModal,
  setToastModal,
  triggerType,
} from '@/reducers/modalReducer';
import { RootState } from '@/reducers';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  const dispatch = useDispatch();
  const customPlaceCount = useSelector((state: RootState) => state.aiReducer?.customPlaceCount);

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
            let placeArray = course.places.filter((place) => place.placeName !== item.placeName);
            (placeArray = placeArray.map((place, index) => {
              place.sort = index + 1;
              return place;
            })),
              setCourse({
                ...course,
                places: placeArray,
              });
            dispatch(
              setToastModal({ opened: true, data: { title: '선택하신 장소가 삭제되었어요.' } }),
            );
          }
        },
      }),
    );
  };

  const openCustomCoursePlaceItem = (item: PlaceItemType) => {
    setCourse({
      ...course,
      places: course.places.filter((place) => {
        if (place.placeName === item.placeName) {
          place.open = !place.open;
        }
        return place;
      }),
    });
  };

  const makeCustomCourseList = () => {
    return course.places.map((item) => {
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
    dispatch(
      setAddPlaceModal({
        opened: true,
        trigger: (place) => {
          if (place === 'none') {
            dispatch(
              setToastModal({
                opened: true,
                data: { title: '장소 항목을 선택해 주세요!' },
              }),
            );
          } else {
            if (place === '음식점') {
              if (customPlaceCount?.RESTAURANT === 0) {
                dispatch(
                  setToastModal({
                    opened: true,
                    data: { title: '앗.. 해당 장소에 적합한 곳이 없어요.' },
                  }),
                );
                return;
              } else {
              }
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
    <div className="w-full px-5">
      {makeAddCustomPlaceItem()}
      {makeCustomCourseList()}
      <div></div>
    </div>
  );
};
export default SelectCustomCourse;
