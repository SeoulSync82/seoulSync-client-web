import { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '@/components/atoms/SVGIcon';
import { PlaceType } from '@/api/course/types';
import { useState } from 'react';
import { AddPlaceModalItemStateType } from '@/components/modals/types';

const AddPlaceModal = () => {
  const isAddPlaceOpen = useSelector((state: RootState) => state.modalReducer?.addPlace.opened);
  const modalTrigger = useSelector((state: RootState) => state.modalReducer?.addPlace.trigger);
  const dispatch = useDispatch();
  const [stateIcons, setStateIcons] = useState<AddPlaceModalItemStateType>({
    restaurantState: false,
    cafeState: false,
    barState: false,
    shoppingState: false,
    cultureState: false,
    entertainmentState: false,
  });

  const addPlace = () => {
    console.log('aaa');
  };

  const makeIcon = (name: PlaceType, isChecked: boolean) => {
    switch (name) {
      case '음식점':
        if (isChecked) {
          return (
            <div className="absolute bottom-[7%] left-[4%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon
                name="restaurantIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#9070CF'}
              />
              <p className="mt-2 text-12 font-normal text-primary-500">음식점</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[7%] left-[4%] flex size-[71px] flex-col items-center justify-center rounded-full ">
              <SVGIcon
                name="restaurantIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#DEE2E6'}
              />
              <p className="mt-2 text-12 font-normal text-gray-400">음식점</p>
            </div>
          );
        }
        break;
      case '카페':
        if (isChecked) {
          return (
            <div className="absolute bottom-[38%] left-[13%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon name="cafeIcon" wSize={35} hSize={35} active={false} color={'#9070CF'} />
              <p className="mt-2 text-12 font-normal text-primary-500">카페</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[38%] left-[13%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="cafeIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">카페</p>
            </div>
          );
        }
        break;
      case '술집':
        if (isChecked) {
          return (
            <div className="absolute bottom-[59%] left-[30%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon name="barIcon" wSize={35} hSize={35} active={false} color={'#9070CF'} />
              <p className="mt-2 text-12 font-normal text-primary-500">술집</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[59%] left-[30%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="barIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">술집</p>
            </div>
          );
        }
        break;
      case '쇼핑':
        if (isChecked) {
          return (
            <div className="absolute bottom-[59%] right-[30%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon name="shoppingIcon" wSize={35} hSize={35} active={false} color={'#9070CF'} />
              <p className="mt-2 text-12 font-normal text-primary-500">쇼핑</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[59%] right-[30%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="shoppingIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">쇼핑</p>
            </div>
          );
        }
        break;
      case '문화':
        if (isChecked) {
          return (
            <div className="absolute bottom-[38%] right-[13%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon name="cultureIcon" wSize={35} hSize={35} active={false} color={'#9070CF'} />
              <p className="mt-2 text-12 font-normal text-primary-500">문화</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[38%] right-[13%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon name="cultureIcon" wSize={35} hSize={35} active={false} color={'#DEE2E6'} />
              <p className="mt-2 text-12 font-normal text-gray-400">문화</p>
            </div>
          );
        }
        break;
      case '놀거리':
        if (isChecked) {
          return (
            <div className="absolute bottom-[7%] right-[4%] flex size-[71px] flex-col items-center justify-center rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.1)]">
              <SVGIcon
                name="entertainmentIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#9070CF'}
              />
              <p className="mt-2 text-12 font-normal text-primary-500">놀거리</p>
            </div>
          );
        } else {
          return (
            <div className="absolute bottom-[7%] right-[4%] flex size-[71px] flex-col items-center justify-center rounded-full">
              <SVGIcon
                name="entertainmentIcon"
                wSize={35}
                hSize={35}
                active={false}
                color={'#DEE2E6'}
              />
              <p className="mt-2 text-12 font-normal text-gray-400">놀거리</p>
            </div>
          );
        }
        break;
      default:
        return <></>;
        break;
    }
  };

  const makeAlertModal = () => {
    if (isAddPlaceOpen) {
      return (
        <div
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#00000033]/20 px-5"
          tabIndex={-1}
        >
          <div className="custom-clip-path absolute bottom-0 left-0 flex h-[252px] w-full flex-col justify-center bg-white p-5">
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: !stateIcons.restaurantState,
                  cafeState: false,
                  barState: false,
                  shoppingState: false,
                  cultureState: false,
                  entertainmentState: false,
                })
              }
            >
              {makeIcon(PlaceType['RESTAURANT'], stateIcons.restaurantState)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: false,
                  cafeState: !stateIcons.cafeState,
                  barState: false,
                  shoppingState: false,
                  cultureState: false,
                  entertainmentState: false,
                })
              }
            >
              {makeIcon(PlaceType['CAFE'], stateIcons.cafeState)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: false,
                  cafeState: false,
                  barState: !stateIcons.barState,
                  shoppingState: false,
                  cultureState: false,
                  entertainmentState: false,
                })
              }
            >
              {makeIcon(PlaceType['BAR'], stateIcons.barState)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: false,
                  cafeState: false,
                  barState: false,
                  shoppingState: !stateIcons.shoppingState,
                  cultureState: false,
                  entertainmentState: false,
                })
              }
            >
              {makeIcon(PlaceType['SHOPPING'], stateIcons.shoppingState)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: false,
                  cafeState: false,
                  barState: false,
                  shoppingState: false,
                  cultureState: !stateIcons.cultureState,
                  entertainmentState: false,
                })
              }
            >
              {makeIcon(PlaceType['CULTURE'], stateIcons.cultureState)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  restaurantState: false,
                  cafeState: false,
                  barState: false,
                  shoppingState: false,
                  cultureState: false,
                  entertainmentState: !stateIcons.entertainmentState,
                })
              }
            >
              {makeIcon(PlaceType['ENTERTAINMENT'], stateIcons.entertainmentState)}
            </div>
            <div
              onClick={() => addPlace()}
              className="absolute bottom-[8.7%] left-1/2 flex -translate-x-1/2 flex-col items-center"
            >
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
