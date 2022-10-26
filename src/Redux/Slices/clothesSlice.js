import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchClothes = createAsyncThunk(
  'clothes/fetchClothesStatus',
  async (params) => {
    const {search, category, sortBy, order, pageCount} = params;

    const { data } = await axios.get(
      `https://6341d46d20f1f9d7997a8302.mockapi.io/items?&page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
    );
    return data;
  }
)

export const clothesSlice = createSlice({
  name: 'clothes',
  initialState: {
    items: [],
    status: 'loading', // loading \ success \ error
  },
  reducers: {
    setItems(state, action){
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchClothes.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },

    [fetchClothes.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success';
    },

    [fetchClothes.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
})

export const { setItems } = clothesSlice.actions

export default clothesSlice.reducer