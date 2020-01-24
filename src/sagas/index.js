import { all } from 'redux-saga/effects';
import watchFetchPhotos from './fetchImageSaga';

export default function* rootSaga() {
  yield all([watchFetchPhotos()]);
}
