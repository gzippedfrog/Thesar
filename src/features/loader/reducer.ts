import { createReducer } from "@reduxjs/toolkit";
import { hideLoader, showLoader } from "./actions";

const initialState = {
  visible: false,
};

const loaderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showLoader, (state) => {
      state.visible = true;
    })
    .addCase(hideLoader, (state) => {
      state.visible = false;
    });
});

export default loaderReducer;
