import { MakeCustomCoursePropsType } from '@/components/organism/types';
import Tag from '../atoms/Tag';
import CustomCourseListItem from '../molecules/CustomCourseListItem';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  const makeCourseLine = () => {
    return course.line.map((item) => {
      return (
        <div key={item.uuid} className="ml-5 mt-4 w-14">
          <Tag size="small" content={item.line} color="primary" />
        </div>
      );
    });
  };

  const makeCustomCourseList = () => {
    return course.places.map((item) => {
      return <CustomCourseListItem key={item.uuid} place={item} />;
    });
  };

  return (
    <div className="w-full px-5">
      <div className="mb-4 flex w-full gap-1">{makeCourseLine()}</div>
      <div className="mb-6 ml-5 text-20 font-semibold text-black">
        <p className="mb-2">{course.subway.station + '역'}</p>
        <p>{course.courseName}</p>
      </div>
      {makeCustomCourseList()}
    </div>
  );
};
export default SelectCustomCourse;
