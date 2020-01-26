import { takeLatest, put, call } from 'redux-saga/effects';
import { getSinglePhoto, getSinglePhotoAsync, fetchFailed } from '../features/PhotoSlice';

function* fetchAsync(action){
  try {
    const response = yield call(fetch, 'http://localhost:3001/gallery');
    const responseBody = yield response.json();
    const filteredResponse = responseBody.find(item => item.id === action.payload)
    yield put(getSinglePhotoAsync(filteredResponse));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }

}


export default function* watchgetSinglePhoto(){
  yield takeLatest(getSinglePhoto, fetchAsync);
}
