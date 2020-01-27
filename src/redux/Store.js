import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import Photos from '../features/PhotoSlice';
import Category from '../features/CategorySlice';

function configureAppStore() {

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer:{
      Photos: Photos,
      Category: Category},
    middleware: [
      ...getDefaultMiddleware(),
      sagaMiddleware
    ]
    })

  sagaMiddleware.run(rootSaga);

  return store
}


export default configureAppStore;

