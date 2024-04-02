import { CustomCourseListItemType } from '@/components/molecules/types';
import SVGIcon from '@/components/atoms/SVGIcon';
import { PlaceType } from '@/api/course/types';
import Tag from '../atoms/Tag';

const CustomCourseListItem = ({ place }: CustomCourseListItemType) => {
  const LineIconColorVariants = () => {
    switch (place.sort) {
      case 1:
        return '#FFC700';
      case 2:
        return '#9070CF';
      case 3:
        return '#6495ED';
      case 4:
        return '#90D690';
      case 5:
        return '#F04F09';
      case 6:
        return '#705F30';
    }
  };

  return (
    <div className="mb-5 flex w-full">
      <div>
        <div className="relative mr-2 h-fit w-fit">
          <SVGIcon
            name="lineIcon"
            wSize={33}
            hSize={33}
            active={false}
            color={LineIconColorVariants()}
          />
          <p className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-2 text-10 text-white">
            {place.sort}
          </p>
        </div>
        <hr className="mr-2 mt-5 rotate-90 border-[1px] border-dashed" />
      </div>
      <div className="w-full">
        <div className="flex w-full justify-between">
          <p className="mb-6 mt-[5px] text-16 text-gray-300">
            {PlaceType[place.placeType as keyof typeof PlaceType]}
          </p>
          <div className="w-12">
            <Tag size="small" color="gray100" content="삭제" />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-20 font-semibold text-gray-900">{place.placeName}</p>
          <div className="rotate-[270deg]">
            <SVGIcon name="leftArrowIcon" wSize={30} hSize={30} active={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomCourseListItem;
