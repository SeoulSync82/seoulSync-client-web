import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/index.scss';
import { Provider } from 'react-redux';
import { Reducer, compose, createStore } from 'redux';
import rootReducer, { RootState } from '@/reducers/index.ts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AddPlaceType, AlertType, BottomSheetType, ToastType } from '@/reducers/modalReducer.ts';
import { CookiesProvider } from 'react-cookie';
import { SubwayCustomPlaceCountType } from '@/api/subway/types';
import { CourseItemType } from '@/api/course/types.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
  interface Window {
    naver: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer as unknown as Reducer<
    RootState,
    {
      type: string;
      payload:
        | AlertType
        | BottomSheetType
        | ToastType
        | AddPlaceType
        | SubwayCustomPlaceCountType
        | CourseItemType
        | unknown;
    }
  >,
  composeEnhancers(),
);

const queryClient = new QueryClient();

root.render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </CookiesProvider>,
);
