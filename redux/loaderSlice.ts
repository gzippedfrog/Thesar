import { createAction, createReducer } from "@reduxjs/toolkit";
import { LoaderState } from "../types";

const initialState: LoaderState = {
  visible: false,
};

// Actions
export const showLoader = createAction("loader/showLoader");
export const hideLoader = createAction("loader/hideLoader");

// Reducer
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
