import { createSlice } from "@reduxjs/toolkit";
import actionUtils from "../Actions";

const appSlice = createSlice({
  name: "collapsible-app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    // toggleMenu: (state) => {
    //   state.isMenuOpen = !state.isMenuOpen;
    // },
    // closeMenu: (state) => {
    //   state.isMenuOpen = false
    // }

    toggleMenu: actionUtils.toggleMenu,
    closeMenu: actionUtils.closeMenu,
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
