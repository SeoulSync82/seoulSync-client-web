const SET_TEST_DATA = 'test/data';

export type TestState = {
  data: string;
};

export const testSet = (data: TestState['data']) => ({
  type: SET_TEST_DATA,
  payload: data,
});

type TestAction = ReturnType<typeof testSet>;

const initialState: TestState = {
  data: '',
};

export default function testReducer(state: TestState = initialState, action: TestAction) {
  switch (action.type) {
    case SET_TEST_DATA:
      state.data = action.payload as string;
      return state;

    default:
      return state;
  }
}
