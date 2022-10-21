import { configureStore } from '@reduxjs/toolkit'
import category from './Slices/categorySlice'
import sort from './Slices/sortSlice'
import search from './Slices/searchSlice'

export const store = configureStore({
  reducer: {
    category,
    sort,
    search,
  },
})

