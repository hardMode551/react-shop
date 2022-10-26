import { configureStore } from '@reduxjs/toolkit'
import filter from './Slices/filterSlice'
import cart from './Slices/cartSlice'
import clothes from './Slices/clothesSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    clothes,
  },
})

