import { configureStore } from '@reduxjs/toolkit'
import filter from './Slices/filter/filterSlice'
import cart from './Slices/cart/cartSlice'
import clothes from './Slices/clothes/clothesSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    clothes,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()