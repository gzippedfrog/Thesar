import { createSlice } from "@reduxjs/toolkit";

const loaderReducer = createSlice({
  name: "loader",
  initialState: {
    visible: false,
  },
  reducers: {
    showLoader: (state) => {
      state.visible = true;
    },
    hideLoader: (state) => {
      state.visible = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderReducer.actions;
export default loaderReducer.reducer;
