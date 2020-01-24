import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchPhotos, fetchPhotosAsync, fetchFailed } from '../features/PhotoSlice';

function* fetchAsync(){
  try {
    const response = yield call(fetch, 'http://localhost:3001/gallery');
    const responseBody = yield response.json();
    yield put(fetchPhotosAsync(responseBody));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }

}


export default function* watchFetchPhotos(){
  yield takeLatest(fetchPhotos, fetchAsync);
}
