import { createSlice } from '@reduxjs/toolkit';


const photos = createSlice({
  name:"photos",
  initialState: {
    gallery: [],
    error: ''
  },
  reducers: {
    fetchPhotos: state => state,
    fetchPhotosAsync: (state, action) => {
      state.gallery = action.payload;
    },
    fetchFailed: (state, action) => {
      state.error = action.payload
    }
  }
})

export const {
  fetchPhotos,
  fetchPhotosAsync,
  fetchFailed
} = photos.actions

export default photos.reducer
