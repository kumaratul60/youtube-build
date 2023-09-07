import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/slices/appSlice";
import searchSlice from "../utils/slices/searchSlice";
import chatSlice from "../utils/slices/chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: chatSlice,
  },
});

export default store;
