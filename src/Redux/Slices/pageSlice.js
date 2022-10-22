import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    pageCount: 1
  },
  reducers: {
    setPageCount(state, action){
      state.pageCount = action.payload;
    },
  }
})

export const { setPageCount } = pageSlice.actions

export default pageSlice.reducer