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
          <div className="absolute bottom-0 left-0 flex h-[252px] w-full flex-col justify-center rounded-t-[400px] bg-white p-5">
            <div className="flex flex-col items-center">
              <SVGIcon
                name="restaurantIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#9070CF'}
              />
              <p className="text-12 font-normal text-gray-900">음식점</p>
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
