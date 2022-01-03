import { createAction, createReducer } from "@reduxjs/toolkit";
import { BarState, Timer } from "../types";
import { AppDispatch, RootState } from "./store";

const initialState: BarState = {
  visible: false,
  message: null,
  timer: null,
};

// Actions
const showBar = createAction<BarState>("bar/showBar");
const hideBar = createAction("bar/hideBar");
export const showMessage =
  (message: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(hideBar());
    let timer = getState().bar.timer as Timer;
    clearTimeout(timer);
    timer = setTimeout(() => dispatch(hideBar()), 2000);
    setTimeout(() => dispatch(showBar({ message, timer } as BarState)), 100);
  };

// Reducer
const barReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showBar, (state, action) => {
      const { message, timer } = action.payload;
      state.visible = true;
      state.message = message;
      state.timer = timer;
    })
    .addCase(hideBar, (state) => {
      state.visible = false;
    });
});

export default barReducer;
