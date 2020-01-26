import { all } from 'redux-saga/effects';
import watchFetchPhotos from './fetchImageSaga';
import watchgetSinglePhoto from './singlePhotoSaga';
import watchsearchPhotos from './searchPhotoSaga';


export default function* rootSaga() {
  yield all([
    watchFetchPhotos(),
    watchgetSinglePhoto(),
    watchsearchPhotos()]);
}
