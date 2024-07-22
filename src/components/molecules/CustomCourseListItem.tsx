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
        <div className="mb-2 rounded-lg bg-gray-50 p-4">
          <div className="flex items-center gap-2.5">
            <img src={item.thumbnail} className="size-[84px] rounded-lg" />
            <div className="w-full">
              <div className="mb-3 flex w-full items-center justify-between">
                <div className="flex items-center">
                  <SVGIcon name="lineIcon" wSize={16} hSize={16} active={false} color={'#ADB5BD'} />
                  <p className="text-12 font-medium text-gray-300">{item.address.slice(0, 2)}</p>
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
              <div className="mb-2 flex w-full items-center justify-between">
                <p className="text-1620 line-clamp-2 break-all font-semibold">{item.placeName}</p>
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
              <p className="text-1418 line-clamp-2 break-all font-medium text-gray-500">
                {item.address}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="mb-2 flex w-full">
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
            <div className="w-12" onClick={() => deleteClick(place)}>
              <Tag size="small" color="gray100" content="삭제" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-20 font-semibold text-gray-900">{place.placeName}</p>
            <div className="rotate-[270deg]" onClick={() => openClick(place)}>
              <SVGIcon name="leftArrowIcon" wSize={30} hSize={30} active={false} color="#000" />
            </div>
          </div>
        </div>
      </div>
      {makeDetailPlace(place)}
    </div>
  );
};
export default CustomCourseListItem;
