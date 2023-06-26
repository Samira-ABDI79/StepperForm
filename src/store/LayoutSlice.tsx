import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface LayoutState {
  SidebarShow: boolean;
}
const initialState: LayoutState = {
  SidebarShow: true,
};
const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.SidebarShow = action.payload;
    },
  },
});

export const { setSidebarShow } = LayoutSlice.actions;

export const userState = (state: RootState) => state.Layout;

export default LayoutSlice.reducer;
