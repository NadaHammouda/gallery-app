import { all } from 'redux-saga/effects';
import watchFetchPhotos from './fetchImageSaga';
import watchgetSinglePhoto from './singlePhotoSaga';
import watchsearchPhotos from './searchPhotoSaga';
import watchFetchCategories from './fetchCategorySaga';
import watchsearchCategory from './searchCategorySaga';
import watchsearchCategoryName from './searchCategoryNameSaga'


export default function* rootSaga() {
  yield all([
    watchFetchPhotos(),
    watchgetSinglePhoto(),
    watchsearchPhotos(),
    watchFetchCategories(),
    watchsearchCategory(),
    watchsearchCategoryName()]);
}
