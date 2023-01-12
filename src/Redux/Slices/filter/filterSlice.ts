import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterSliceState, Sort, SortPropertyEnum } from './types';




const initialState: filterSliceState = {
  categoryId: 0,
  sort: {
    name: 'Популярности (по убыванию)',
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  searchValue: '',
  pageCount: 1,
  switchOn: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>){
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>){
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>){
      state.searchValue = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>){
      state.pageCount = action.payload;
    },
    setSwitchOn(state, action: PayloadAction<Boolean>){
      state.switchOn = action.payload;
    },
    setFilter(state, action: PayloadAction<filterSliceState>){
      if(Object.keys(action.payload).length){
        state.categoryId = Number(action.payload.categoryId);
        state.pageCount = Number(action.payload.pageCount);
        state.sort = action.payload.sort;
      } else {
        state.pageCount = 1;
        state.categoryId = 0;
        state.sort ={
          name: 'популярности',
          sortProperty: SortPropertyEnum.RATING_DESC,
        }
      }
    },
  }
})



export const { setCategoryId, setSort, setSearchValue, setPageCount, setSwitchOn, setFilter } = filterSlice.actions;

export default filterSlice.reducer;