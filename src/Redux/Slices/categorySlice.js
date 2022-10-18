import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'counter',
  initialState: {
    categoryId: 0
  },
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setCategoryId } = categorySlice.actions

export default categorySlice.reducer