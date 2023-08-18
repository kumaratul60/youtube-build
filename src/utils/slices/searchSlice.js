import { createSlice } from "@reduxjs/toolkit";
import searchUtils from "../Actions/SearchActions";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: searchUtils.cacheResults,
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

// LRU cache
