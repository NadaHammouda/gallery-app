import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCategories, fetchCategoriesAsync, fetchFailed} from '../features/CategorySlice';

function* fetchAsync(){
  try {
    const response = yield call(fetch, 'http://localhost:3001/categories');
    const responseBody = yield response.json();
    yield put(fetchCategoriesAsync(responseBody));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }

}


export default function* watchFetchCategories(){
  yield takeLatest(fetchCategories, fetchAsync);
}
