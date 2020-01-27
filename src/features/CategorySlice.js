import { createSlice } from '@reduxjs/toolkit';


const category = createSlice({
  name:"category",
  initialState: {
    categories:[],
    searchCategory: [],
    error:""
  },
  reducers:{
    fetchCategories: state => state,
    fetchCategoriesAsync: (state, action) => {
      state.categories = action.payload
    },
    fetchFailed: (state, action) => {
      state.error = action.payload
    },
    searchCategory: state => state,
    searchCategoryAsync: (state, action) => {
      state.searchCategory = action.payload
    }
  }
})


export const {
  fetchCategories,
  fetchCategoriesAsync,
  fetchFailed,
  searchCategory,
  searchCategoryAsync
} = category.actions

export default category.reducer
