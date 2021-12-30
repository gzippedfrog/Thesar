import { createSlice } from "@reduxjs/toolkit";

// Reducer
const barReducer = createSlice({
  name: "bar",
  initialState: {
    visible: false,
    message: null,
    timer: null,
  },
  reducers: {
    showBar: (state, action) => {
      const { message, timer } = action.payload;
      state.visible = true;
      state.message = message;
      state.timer = timer;
    },
    hideBar: (state) => {
      state.visible = false;
    },
  },
});

// Actions
export const { showBar, hideBar } = barReducer.actions;
export const showMessage = (message) => (dispatch, getState) => {
  dispatch(hideBar());
  clearTimeout(getState().bar.timer);
  let timer = setTimeout(() => dispatch(hideBar()), 2000);
  setTimeout(() => dispatch(showBar({ message, timer })), 100);
};

export default barReducer.reducer;
