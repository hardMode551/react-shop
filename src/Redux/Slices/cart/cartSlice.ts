import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartFromLS } from '../../../utils/getCartFromLocalStorage';
import {calcTotalPrice } from '../../../utils/calcTotalPrice'
import { cartSliceState, TypeCartItem } from './types';





const initialState: cartSliceState = getCartFromLS();


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TypeCartItem>){
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if(findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<string>){
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if(findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem(state, action: PayloadAction<string>){
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items);
    },

    clearItem(state){
      state.items = [];
      state.totalPrice = 0;
    },
  }
})


export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions

export default cartSlice.reducer