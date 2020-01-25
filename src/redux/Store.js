import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import Photos from '../features/PhotoSlice';


function configureAppStore() {

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: Photos,
    middleware: [
      ...getDefaultMiddleware(),
      sagaMiddleware
    ]
    })

  sagaMiddleware.run(rootSaga);

  return store
}


export default configureAppStore;

