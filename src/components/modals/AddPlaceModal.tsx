import { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '@/components/atoms/SVGIcon';
import { PlaceType } from '@/api/course/types';
import { useState } from 'react';
import { AddPlaceModalItemStateType } from '@/components/modals/types';
import { setAddPlaceModal } from '@/reducers/modalReducer';

const AddPlaceModal = () => {
  const isAddPlaceOpen = useSelector((state: RootState) => state.modalReducer?.addPlace.opened);
  const modalTrigger = useSelector((state: RootState) => state.modalReducer?.addPlace.trigger);
  const dispatch = useDispatch();
  const [stateIcons, setStateIcons] = useState<AddPlaceModalItemStateType>({
    음식점: false,
    카페: false,
    술집: false,
    쇼핑: false,
    문화: false,
    놀거리: false,
  });

  const addPlace = () => {
    let isSelected: boolean = false;

    if (modalTrigger) {
      Object.entries(stateIcons).map(([key, value]) => {
        if (value) {
          isSelected = true;
          modalTrigger(key as PlaceType);
          dispatch(
            setAddPlaceModal({
              opened: false,
            }),
          );
          return;
        }
      });

      if (!isSelected) {
        modalTrigger('none');
        dispatch(
          setAddPlaceModal({
            opened: false,
          }),
        );
      }
    }
    setStateIcons({
      음식점: false,
      카페: false,
      술집: false,
      쇼핑: false,
      문화: false,
      놀거리: false,
    });
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

  const makeAddPlaceModal = () => {
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
                  음식점: !stateIcons.음식점,
                  카페: false,
                  술집: false,
                  쇼핑: false,
                  문화: false,
                  놀거리: false,
                })
              }
            >
              {makeIcon(PlaceType['RESTAURANT'], stateIcons.음식점)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  음식점: false,
                  카페: !stateIcons.카페,
                  술집: false,
                  쇼핑: false,
                  문화: false,
                  놀거리: false,
                })
              }
            >
              {makeIcon(PlaceType['CAFE'], stateIcons.카페)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  음식점: false,
                  카페: false,
                  술집: !stateIcons.술집,
                  쇼핑: false,
                  문화: false,
                  놀거리: false,
                })
              }
            >
              {makeIcon(PlaceType['BAR'], stateIcons.술집)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  음식점: false,
                  카페: false,
                  술집: false,
                  쇼핑: !stateIcons.쇼핑,
                  문화: false,
                  놀거리: false,
                })
              }
            >
              {makeIcon(PlaceType['SHOPPING'], stateIcons.쇼핑)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  음식점: false,
                  카페: false,
                  술집: false,
                  쇼핑: false,
                  문화: !stateIcons.문화,
                  놀거리: false,
                })
              }
            >
              {makeIcon(PlaceType['CULTURE'], stateIcons.문화)}
            </div>
            <div
              onClick={() =>
                setStateIcons({
                  음식점: false,
                  카페: false,
                  술집: false,
                  쇼핑: false,
                  문화: false,
                  놀거리: !stateIcons.놀거리,
                })
              }
            >
              {makeIcon(PlaceType['ENTERTAINMENT'], stateIcons.놀거리)}
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
  return makeAddPlaceModal();
};

export default AddPlaceModal;
