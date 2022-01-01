import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

interface LoaderState {
  visible: boolean;
}

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
