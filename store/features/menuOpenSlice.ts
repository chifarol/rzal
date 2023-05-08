import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface menuOpenState {
  menuIsOpen: boolean;
}
const initialState: menuOpenState = {
  menuIsOpen: false,
};

export const menuOpenSlice = createSlice({
  name: "menuOpen",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.menuIsOpen = true;
      console.log('menuIsOpen true')
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
      console.log('menuIsOpen false')
    },
  },
});

export const { openMenu, closeMenu } =
  menuOpenSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectMenuIsOpen= (state: RootState) =>
  state.menuOpen.menuIsOpen;

export default menuOpenSlice.reducer;
