import { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '../atoms/SVGIcon';

const AddPlaceModal = () => {
  const isAddPlaceOpen = useSelector((state: RootState) => state.modalReducer?.addPlace.opened);
  const modalTrigger = useSelector((state: RootState) => state.modalReducer?.addPlace.trigger);
  const dispatch = useDispatch();

  const makeAlertModal = () => {
    if (isAddPlaceOpen) {
      return (
        <div
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#00000033]/20 px-5"
          tabIndex={-1}
        >
          <div className="custom-clip-path absolute bottom-0 left-0 flex h-[252px] w-full flex-col justify-center bg-white p-5">
            <div className="absolute bottom-[7%] left-[4%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon
                name="restaurantIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#DEE2E6'}
              />
              <p className="mt-2 text-12 font-normal text-gray-400">음식점</p>
            </div>
            <div className="absolute bottom-[38%] left-[13%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="cafeIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">카페</p>
            </div>
            <div className="absolute bottom-[59%] left-[30%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="wineIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">술집</p>
            </div>
            <div className="absolute bottom-[59%] right-[30%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="shoppingIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">쇼핑</p>
            </div>
            <div className="absolute bottom-[38%] right-[13%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="cultureIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">문화</p>
            </div>
            <div className="absolute bottom-[7%] right-[4%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="cardIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">놀거리</p>
            </div>
            <div className="absolute bottom-[8.7%] left-1/2 flex -translate-x-1/2 flex-col items-center">
              <SVGIcon name="logoIcon" wSize={114} hSize={114} active={false} />
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return makeAlertModal();
};

export default AddPlaceModal;
