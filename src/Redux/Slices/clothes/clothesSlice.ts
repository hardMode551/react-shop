import { createSlice } from '@reduxjs/toolkit'
import { fetchClothes } from './asyncActions';
import { clothesSliceState, Status } from './types';

const initialState: clothesSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

export const clothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    setItems(state, action){
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClothes.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchClothes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchClothes.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
  
})

export const { setItems } = clothesSlice.actions

export default clothesSlice.reducer