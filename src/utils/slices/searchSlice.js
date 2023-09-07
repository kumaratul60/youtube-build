import { createSlice } from "@reduxjs/toolkit";
import searchUtils from "../Actions/SearchActions";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    currQuerySearch: null,
  },
  reducers: {
    cacheResults: searchUtils.cacheResults,
    queryResult: searchUtils.queryResult,
  },
});

export const { cacheResults, queryResult } = searchSlice.actions;

export default searchSlice.reducer;

// LRU cache
