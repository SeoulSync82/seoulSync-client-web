import SVGIcon from '@/components/atoms/SVGIcon';
import type { AddCustomPlaceItemPropsType } from '@/components/molecules/types';

const AddCustomPlaceItem = ({ click }: AddCustomPlaceItemPropsType) => {
  return (
    <div className="flex h-[77px] w-full  items-center rounded-lg bg-gray-900 px-5">
      <div
        className="flex size-[36px] items-center justify-center rounded-full bg-primary-500"
        onClick={click}
      >
        <SVGIcon name="plusIcon" wSize={24} hSize={24} active={false} />
      </div>
      <div className="ml-3 text-white">
        <p className="mb-2 text-16 font-semibold">플러스를 누르면 추가할 수 있어요 !</p>
        <p className="text-12">다른 장소 추천받기</p>
      </div>
    </div>
  );
};
export default AddCustomPlaceItem;
