import { createSlice } from '@reduxjs/toolkit';


const photos = createSlice({
  name:"photos",
  initialState: {
    gallery: [],
    error: '',
    currentPage: 1,
    photosPerPage: 9,
    indexofLastPost:0,
    indexofFirstPost: 0,
    currentPagePhotos: [],
    totalPhotos: 0,
    singlePhoto: "",
    searchPhotos: []
  },
  reducers: {
    fetchPhotos: state => state,
    fetchPhotosAsync: (state, action) => {
      state.gallery = action.payload;
      state.totalPhotos = state.gallery.length
      photos.caseReducers.changePagePhotos(state);
    },
    fetchFailed: (state, action) => {
      state.error = action.payload
    },
    previousPage: state => {
      if(state.currentPage > 1){
        state.currentPage--;
        photos.caseReducers.changePagePhotos(state);
      }
    },
    nextPage: state => {
      if(state.currentPage <= Math.ceil(state.totalPhotos/state.photosPerPage)){
        state.currentPage++;
        photos.caseReducers.changePagePhotos(state);
      }
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload
      photos.caseReducers.changePagePhotos(state);
    },
    changePagePhotos: state => {
      state.indexofLastPost = state.currentPage * state.photosPerPage;
      state.indexofFirstPost = state.indexofLastPost - state.photosPerPage;
      state.currentPagePhotos = state.gallery.slice(state.indexofFirstPost,state.indexofLastPost);
      window.scrollTo(0, 0);
    },
    getSinglePhoto: state => state,
    getSinglePhotoAsync: (state, action) => {
      state.singlePhoto = action.payload
    },
    searchPhotos: state => state,
    searchPhotosAsync: (state, action) => {
      state.gallery = action.payload
      state.totalPhotos = state.gallery.length
      photos.caseReducers.changePagePhotos(state);

    },
    searchByCategory: state => state,
    searchByCategoryAsync: (state, action) => {
      state.gallery = action.payload
      state.totalPhotos = state.gallery.length
      photos.caseReducers.changePagePhotos(state);
    }
  }
})

export const {
  fetchPhotos,
  fetchPhotosAsync,
  fetchFailed,
  previousPage,
  nextPage,
  changeCurrentPage,
  changePagePhotos,
  getSinglePhoto,
  getSinglePhotoAsync,
  searchPhotos,
  searchPhotosAsync,
  searchByCategory,
  searchByCategoryAsync
} = photos.actions

export default photos.reducer
