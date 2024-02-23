import { combineReducers } from 'redux';
import modalReducer, { ModalState } from '@/reducers/modalReducer';
const rootReducer = combineReducers({
  modalReducer,
});

export type RootState = {
  modalReducer: ModalState | undefined;
};
export default rootReducer;
