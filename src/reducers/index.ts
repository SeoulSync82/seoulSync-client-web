import { combineReducers } from 'redux';
import modalReducer, { ModalState } from '@/reducers/modalReducer';
import aiReducer, { AIState } from './AIReducer';
const rootReducer = combineReducers({
  modalReducer,
  aiReducer,
});

export type RootState = {
  modalReducer: ModalState | undefined;
  aiReducer: AIState | undefined;
};
export default rootReducer;
