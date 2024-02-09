import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/index.scss';
import { Provider } from 'react-redux';
import { Reducer, compose, createStore } from 'redux';
import rootReducer, { RootState } from '@/reducers/index.ts';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AlertType } from '@/reducers/modalReducer.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer as Reducer<RootState, { type: string; payload: AlertType }>,
  composeEnhancers(),
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
