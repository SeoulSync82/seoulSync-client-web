import { combineReducers } from 'redux';
import testReducer, { TestState } from '@/reducers/testReducer';
const rootReducer = combineReducers({
  testReducer,
});

export type RootState = {
  testReducer: TestState | undefined; // Allow for undefined
};
export default rootReducer;
