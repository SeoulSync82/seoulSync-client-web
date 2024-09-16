import { PlaceItemType } from '@/api/course/types';

const SET_ALERT_MODAL = 'modal/alert';
const SET_BOTTOM_SHEET = 'modal/bottomSheet';
const SET_TOAST_MODAL = 'modal/toast';
const SET_ADD_PLACE = 'modal/addPlace';

export type triggerType = 'cancel' | 'submit';
export type addPlaceTriggerType = '';

export type AlertType = {
  opened: boolean;
  data: {
    title?: string;
    titleHTML?: boolean;
    message?: string;
    messageHTML?: boolean;
    useTrigger?: boolean;
  };
  trigger?: (value: triggerType) => void;
};

export type BottomSheetType = {
  opened: boolean;
  data: {
    title?: string;
    titleHTML?: boolean;
    item?: PlaceItemType;
    useTrigger?: boolean;
  };
  trigger?: (value: triggerType) => void;
};

export type ToastType = {
  opened: boolean;
  data: {
    title?: string;
    titleHTML?: boolean;
  };
};

export type AddPlaceType = {
  opened: boolean;
  trigger?: (value: addPlaceTriggerType) => void;
};

export type ModalState = {
  alert: AlertType;
  bottomSheet: BottomSheetType;
  toast: ToastType;
  addPlace: AddPlaceType;
};

export const setAlertModal = (data: ModalState['alert']) => ({
  type: SET_ALERT_MODAL,
  payload: data,
});

export const setBottomSheetModal = (data: ModalState['bottomSheet']) => ({
  type: SET_BOTTOM_SHEET,
  payload: data,
});

export const setToastModal = (data: ModalState['toast']) => ({
  type: SET_TOAST_MODAL,
  payload: data,
});

export const setAddPlaceModal = (data: ModalState['addPlace']) => ({
  type: SET_ADD_PLACE,
  payload: data,
});

type ModalAction = ReturnType<typeof setAlertModal>;

const initialState: ModalState = {
  alert: {
    opened: false,
    data: {},
  },
  bottomSheet: {
    opened: false,
    data: {},
  },
  toast: {
    opened: false,
    data: {},
  },
  addPlace: {
    opened: true,
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
    case SET_BOTTOM_SHEET:
      return {
        ...state,
        bottomSheet: action.payload,
      };
    case SET_TOAST_MODAL:
      return {
        ...state,
        toast: action.payload,
      };
    case SET_ADD_PLACE:
      return {
        ...state,
        addPlace: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
