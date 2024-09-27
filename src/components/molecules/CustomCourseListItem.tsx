import { CustomCourseListItemType } from '@/components/molecules/types';
import SVGIcon from '@/components/atoms/SVGIcon';
import { PlaceItemType, PlaceType } from '@/api/course/types';
import Tag from '../atoms/Tag';

const CustomCourseListItem = ({ place, deleteClick, openClick }: CustomCourseListItemType) => {
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

  const makeDetailPlace = (item: PlaceItemType) => {
    if (item.open) {
      return (
        <div className="mb-2 w-full rounded-lg bg-gray-50 p-4">
          <div className="mb-3 flex w-full items-center justify-between">
            <p className="text-1620 font-bold text-black">{item.placeName}</p>
            <div className="rotate-[90deg]" onClick={() => openClick(place)}>
              <SVGIcon name="leftArrowIcon" wSize={16} hSize={16} active={false} color="#000" />
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <img src={item.thumbnail} className="size-[68px] min-w-[68px] rounded-lg object-fill" />
            <div className="w-full">
              <div className="mb-2 flex w-full items-center justify-between">
                <p className="line-clamp-2 break-all text-1418 font-medium text-gray-500">
                  {item.address}
                </p>
                <div className="flex items-center">
                  <SVGIcon
                    name="fullStartIcon"
                    wSize={14}
                    hSize={14}
                    active={false}
                    color={'#9070CF'}
                  />
                  <p className="text-12 font-normal text-gray-900">{item.score}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-12 font-bold text-primary-500">지도보기</p>
                <div className="rotate-[180deg]" onClick={() => openClick(place)}>
                  <SVGIcon
                    name="leftArrowIcon"
                    wSize={12}
                    hSize={12}
                    active={false}
                    color="#9070CF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p className="text-20 font-semibold text-gray-900">{place.placeName}</p>
          <div className="rotate-[270deg]" onClick={() => openClick(place)}>
            <SVGIcon name="leftArrowIcon" wSize={30} hSize={30} active={false} color="#000" />
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <div className="mb-2 flex w-full">
        <div className="flex flex-col items-center justify-center">
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
          <hr className="mr-2 mt-2 h-full w-0 border-[1px] border-dashed" />
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            <p className="mb-6 mt-[5px] text-16 text-gray-300">
              {PlaceType[place.placeType as keyof typeof PlaceType]}
            </p>
            <div className="w-12" onClick={() => deleteClick(place)}>
              <Tag size="small" color="gray100" content="삭제" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between"> {makeDetailPlace(place)}</div>
        </div>
      </div>
    </div>
  );
};
export default CustomCourseListItem;
