import { configureStore } from '@reduxjs/toolkit'
import category from './Slices/categorySlice'
import sort from './Slices/sortSlice'

export const store = configureStore({
  reducer: {
    category,
    sort,
  },
})

