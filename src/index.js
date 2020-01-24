import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/index';
import Photos from './features/PhotoSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
reducer: Photos,
middleware: [
  ...getDefaultMiddleware(),
  sagaMiddleware
]
})

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
