import { MakeCustomCoursePropsType } from '@/components/organism/types';
import Tag from '../atoms/Tag';
import CustomCourseListItem from '../molecules/CustomCourseListItem';
import { PlaceItemType } from '@/api/course/types';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  const makeCourseLine = () => {
    return course.line.map((item) => {
      return (
        <div key={item.uuid} className="mt-4 w-14">
          <Tag size="small" content={item.line} color="primary" />
        </div>
      );
    });
  };

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

  return (
    <div className="w-full px-5">
      <div className="mb-4 flex w-full gap-1">{makeCourseLine()}</div>
      <div className="mb-6 text-20 font-semibold text-black">
        <p className="mb-2">{course.subway.station + '역'}</p>
        <p>{course.courseName}</p>
      </div>
      {makeCustomCourseList()}
      <div></div>
    </div>
  );
};
export default SelectCustomCourse;
