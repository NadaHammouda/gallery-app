import { createSlice } from '@reduxjs/toolkit';


const photos = createSlice({
  name:"photos",
  initialState: {
    gallery: [],
    error: '',
    currentPage: 1,
    photosPerPage: 9,
    indexofLastPost:9,
    indexofFirstPost: 0,
    currentPagePhotos: [],
    totalPosts: 0
  },
  reducers: {
    fetchPhotos: state => state,
    fetchPhotosAsync: (state, action) => {
      state.gallery = action.payload;
      state.totalPosts = state.gallery.length
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
      if(state.currentPage <= Math.ceil(state.totalPosts/state.photosPerPage)){
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
  changePagePhotos
} = photos.actions

export default photos.reducer
