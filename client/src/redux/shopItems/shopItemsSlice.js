import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { shopData } from "../../data/data";
import shopItemsApi from "../../api/shopItems";

export const getShopItems = createAsyncThunk("/shopItems", async () => {
  const response = await shopItemsApi.get("/shopItems");
  return response.data;
});

export const addShopItems = createAsyncThunk("/addItems", async () => {
  const response = await shopItemsApi.post("/addItems", { data: shopData });
  return response.data;
});

const shopItemsSlice = createSlice({
  name: "shopItemsSlice",
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: {
    [getShopItems.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getShopItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = "success";
    },
    [getShopItems.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addShopItems.pending]: (state, action) => {
      state.status = "Loading";
    },
    [addShopItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = "success";
    },
    [addShopItems.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectShopItems = (state) => state.shopItems.items;

export default shopItemsSlice.reducer;
