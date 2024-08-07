import { RootState } from '@/reducers';
import { setBottomSheetModal, triggerType } from '@/reducers/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import SVGIcon from '../atoms/SVGIcon';

const BottomSheetModal = () => {
  const isBottomSheetOpen = useSelector(
    (state: RootState) => state.modalReducer?.bottomSheet.opened,
  );
  const modalData = useSelector((state: RootState) => state.modalReducer?.bottomSheet.data);
  const modalTrigger = useSelector((state: RootState) => state.modalReducer?.bottomSheet.trigger);

  const dispatch = useDispatch();

  const makeTitle = () => {
    if (modalData) {
      if (modalData.title) {
        if (modalData.titleHTML) {
          return (
            <p
              className="text-20 font-bold text-gray-900"
              dangerouslySetInnerHTML={{ __html: modalData.title }}
            ></p>
          );
        } else {
          return <p className="text-20 font-bold text-gray-900">{modalData.title}</p>;
        }
      }
    }
  };

  const makeItem = () => {
    if (modalData) {
      if (modalData.item) {
        return (
          <div className="mb-2 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2.5">
              <img src={modalData.item.thumbnail} className="size-[84px] rounded-lg" />
              <div className="w-full">
                <div className="mb-1 flex w-full items-center justify-between">
                  <p className="line-clamp-2 break-all text-1620 font-semibold">
                    {modalData.item.placeName}
                  </p>
                  <div className="flex items-center">
                    <SVGIcon
                      name="fullStartIcon"
                      wSize={14}
                      hSize={14}
                      active={false}
                      color={'#9070CF'}
                    />
                    <p className="text-12 font-normal text-gray-900">{modalData.item.score}</p>
                  </div>
                </div>
                <div className="mb-2 flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-12 font-bold text-primary-500">지도보기</p>
                    <div className="rotate-[180deg]">
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
                <p className="line-clamp-2 break-all text-1418 font-medium text-gray-500">
                  {modalData.item.address}
                </p>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  const onClickSubmit = (type: triggerType) => {
    if (modalData) {
      if (modalData.useTrigger && modalTrigger) {
        modalTrigger(type);
      }
      dispatch(
        setBottomSheetModal({
          opened: false,
          data: {},
        }),
      );
    }
  };

  const makeAlertModal = () => {
    if (isBottomSheetOpen) {
      return (
        <div
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#00000033]/20 px-5"
          tabIndex={-1}
        >
          <div className="absolute bottom-0 left-0 flex w-full flex-col justify-center rounded-t-2xl bg-white p-5">
            <div className="mb-5">{makeTitle()}</div>
            <div className="mb-4">{makeItem()}</div>
            <div className="flex w-full items-center justify-between gap-[4%]">
              <div
                className="flex w-full cursor-pointer items-center justify-center rounded border border-solid border-gray-200 py-5"
                onClick={() => onClickSubmit('cancel')}
              >
                <p className="text-18 font-bold text-gray-400">취소</p>
              </div>
              <div
                className="flex w-full cursor-pointer items-center justify-center rounded bg-primary-500 py-5"
                onClick={() => onClickSubmit('submit')}
              >
                <p className="text-18 font-bold text-white">삭제</p>
              </div>
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

export default BottomSheetModal;
