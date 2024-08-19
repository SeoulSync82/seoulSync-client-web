import { MakeCustomCoursePropsType } from '@/components/organism/types';
import CustomCourseListItem from '@/components/molecules/CustomCourseListItem';
import { PlaceItemType } from '@/api/course/types';
import AddCustomPlaceItem from '@/components/molecules/AddCustomPlaceItem';
import { useDispatch } from 'react-redux';
import { setBottomSheetModal, setToastModal, triggerType } from '@/reducers/modalReducer';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  const dispatch = useDispatch();

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
    console.log('aaa');
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
