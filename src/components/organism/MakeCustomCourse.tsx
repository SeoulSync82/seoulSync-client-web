import { MakeCustomCoursePropsType } from '@/components/organism/types';

const SelectCustomCourse = ({ course, setCourse }: MakeCustomCoursePropsType) => {
  return (
    <div>
      <p>{course.courseName}</p>
    </div>
  );
};
export default SelectCustomCourse;
