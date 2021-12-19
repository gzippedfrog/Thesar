import React from "react";
import { Snackbar } from "react-native-paper";
import { useSelector } from "react-redux";

const Bar = () => {
  const barVisible = useSelector((state) => state.barVisible);
  const barMsg = useSelector((state) => state.barMsg);
  return <Snackbar visible={barVisible}>{barMsg}</Snackbar>;
};

export default Bar;
