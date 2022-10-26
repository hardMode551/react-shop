import { createSlice } from '@reduxjs/toolkit'


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    sort: {
      name: 'Популярности (по убыванию)',
      sortProperty: 'rating',
    },
    searchValue: '',
    pageCount: 1,
  },
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload;
    },
    setSort(state, action){
      state.sort = action.payload;
    },
    setSearchValue(state, action){
      state.searchValue = action.payload;
    },
    setPageCount(state, action){
      state.pageCount = action.payload;
    },
    setFilter(state, action){
      state.categoryId = Number(action.payload.categoryId);
      state.pageCount = Number(action.payload.pageCount);
      state.sort = action.payload.sort;
    },
  }
})

export const { setCategoryId, setSort, setSearchValue, setPageCount, setFilter } = filterSlice.actions

export default filterSlice.reducer