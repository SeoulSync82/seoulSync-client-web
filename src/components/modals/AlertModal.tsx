import { RootState } from '@/reducers';
import { setAlertModal } from '@/reducers/modalReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AlertModal = () => {
  const isAlterOpen = useSelector((state: RootState) => state.modalReducer?.alert.opened);
  const alertData = useSelector((state: RootState) => state.modalReducer?.alert.data);
  const alertTrigger = useSelector((state: RootState) => state.modalReducer?.alert.trigger);

  const dispatch = useDispatch();

  const makeTitle = () => {
    if (alertData) {
      if (alertData.title) {
        if (alertData.titleHTML) {
          return (
            <p
              className="text-18 font-bold text-[#101010]"
              dangerouslySetInnerHTML={{ __html: alertData.title }}
            ></p>
          );
        } else {
          return <p className="text-18 font-bold text-[#101010]">{alertData.title}</p>;
        }
      }
    }
  };

  const makeMessage = () => {
    if (alertData) {
      if (alertData.message) {
        if (alertData.messageHTML) {
          return (
            <p
              className="text-1624 font-medium text-[#A4A4A4]"
              dangerouslySetInnerHTML={{ __html: alertData.message }}
            ></p>
          );
        } else {
          return <p className="text-1624 font-medium text-[#A4A4A4]">{alertData.message}</p>;
        }
      }
    }
  };

  const onClickSubmit = () => {
    if (alertData) {
      if (alertData.useTrigger && alertTrigger) {
        alertTrigger();
      } else {
        dispatch(
          setAlertModal({
            opened: false,
            data: {},
          }),
        );
      }
    }
  };

  // useEffect(() => {
  //   console.log(alterReducer);
  // }, [alterReducer?.opened]);

  const makeAlertModal = () => {
    if (isAlterOpen) {
      return (
        <div
          className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#00000033]/20 px-5"
          tabIndex={-1}
        >
          <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white px-8">
            <div className="mb-4 mt-[34px] text-center">{makeTitle()}</div>
            <div className="text-center">{makeMessage()}</div>
            <hr className="mt-[34px] h-px w-full bg-[#EDEDED]" />
            <div onClick={() => onClickSubmit()}>
              <p className="my-5 cursor-pointer text-18 font-bold text-[#4A82EE]">확인</p>
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

export default AlertModal;
