const SET_ALERT_MODAL = 'moal/alert';

export type AlertType = {
  opened: boolean;
  data: {
    title?: string;
    titleHTML?: boolean;
    message?: string;
    messageHTML?: boolean;
    useTrigger?: boolean;
  };
  trigger?: () => void;
};

export type ModalState = {
  alert: AlertType;
};

export const setAlertModal = (data: ModalState['alert']) => ({
  type: SET_ALERT_MODAL,
  payload: data,
});

type ModalAction = ReturnType<typeof setAlertModal>;

const initialState: ModalState = {
  alert: {
    opened: false,
    data: {},
  },
};

const modalReducer = (state: ModalState = initialState, action: ModalAction) => {
  switch (action.type) {
    case SET_ALERT_MODAL:
      /*
      //코드 불변성에 대해서 블로그 글쓰기
      state.alert = action.payload;
      return state;
      */
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
