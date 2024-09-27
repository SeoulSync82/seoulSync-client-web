import { RootState } from '@/reducers';
import { setToastModal } from '@/reducers/modalReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ToastModal = () => {
  const isToastModalOpen = useSelector((state: RootState) => state.modalReducer?.toast.opened);
  const modalData = useSelector((state: RootState) => state.modalReducer?.toast.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isToastModalOpen) {
      setTimeout(() => dispatch(setToastModal({ opened: false, data: {} })), 5000);
    }
  });

  const makeTitle = () => {
    if (modalData) {
      if (modalData.title) {
        if (modalData.titleHTML) {
          return (
            <p
              className="text-center text-14 font-medium text-white"
              dangerouslySetInnerHTML={{ __html: modalData.title }}
            ></p>
          );
        } else {
          return <p className="text-center text-14 font-medium text-white">{modalData.title}</p>;
        }
      }
    }
  };

  const makeToastModal = () => {
    if (isToastModalOpen) {
      return (
        <div
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-end overflow-hidden px-5 pb-24"
          tabIndex={-1}
        >
          <div className="flex w-full flex-col items-center justify-center rounded-[4px] bg-gray-900 p-3">
            {makeTitle()}
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return makeToastModal();
};

export default ToastModal;
