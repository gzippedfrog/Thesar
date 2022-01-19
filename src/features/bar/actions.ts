import { createAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../../redux/store";
import type { BarState } from "./types";

export const showBar = createAction<BarState>("bar/showBar");
export const hideBar = createAction("bar/hideBar");
export const showMessage =
  (message: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(hideBar());
    let timer = getState().bar.timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => dispatch(hideBar()), 2000);
    setTimeout(() => dispatch(showBar({ message, timer } as BarState)), 100);
  };
