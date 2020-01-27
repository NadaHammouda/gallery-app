import { takeLatest, put, call } from 'redux-saga/effects';
import { searchByCategory, searchByCategoryAsync, fetchFailed } from '../features/PhotoSlice';

function* fetchAsync(action){
  const filter = action.payload
  try {
    const response = yield call(fetch, 'http://localhost:3001/gallery');
    const responseBody = yield response.json();
    const filteredResponse = responseBody.filter(photo => {
      const lc = photo.categories
      return lc.includes(filter)
    })
    yield put(searchByCategoryAsync(filteredResponse));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }

}


export default function* watchsearchCategory(){
  yield takeLatest(searchByCategory, fetchAsync);
}
