import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortId: {
    name: 'Популярности (по убыванию)',
    sortProperty: 'rating',
  },
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action){
      state.sortId = action.payload;
    },
  },
})

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;