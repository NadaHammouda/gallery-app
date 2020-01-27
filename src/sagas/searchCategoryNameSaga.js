import { takeLatest, put, call } from 'redux-saga/effects';
import { searchCategory, searchCategoryAsync, fetchFailed} from '../features/CategorySlice';

function* fetchAsync(action){
  const filter = action.payload.toLowerCase()
  try {
    const response = yield call(fetch, 'http://localhost:3001/categories');
    const responseBody = yield response.json();
    const filteredResponse = responseBody.filter(category => {
      const lc = category.toLowerCase()
      return lc.includes(filter)
    })
    yield put(searchCategoryAsync(filteredResponse));
  } catch (e) {
      yield put(fetchFailed(e));
      return;
  }

}


export default function* watchsearchCategoryName(){
  yield takeLatest(searchCategory, fetchAsync);
}
