import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clothesItems, fetchClothesParams } from "./types";

export const fetchClothes = createAsyncThunk<clothesItems[], fetchClothesParams>(
  'clothes/fetchClothesStatus',
  async (params) => {
    const {search, category, sortBy, order, pageCount} = params;

    const { data } = await axios.get<clothesItems[]>(
      `https://6341d46d20f1f9d7997a8302.mockapi.io/items?&page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`,
    );
    return data;
  }
)