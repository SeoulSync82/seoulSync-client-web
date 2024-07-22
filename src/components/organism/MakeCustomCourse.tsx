import { MakeCustomCoursePropsType } from '@/components/organism/types';
import CustomCourseListItem from '@/components/molecules/CustomCourseListItem';
import { PlaceItemType } from '@/api/course/types';
import AddCustomPlaceItem from '@/components/molecules/AddCustomPlaceItem';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  const deleteCustomCoursePlaceItem = (item: PlaceItemType) => {
    setCourse({
      ...course,
      places: course.places.filter((place) => place.placeName !== item.placeName),
    });
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
