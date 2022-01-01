import React from "react";
import { Snackbar } from "react-native-paper";
import { useAppSelector } from "../redux/hooks";

const Bar = () => {
  const bar = useAppSelector((state) => state.bar);

  return <Snackbar visible={bar.visible}>{bar.message}</Snackbar>;
};

export default Bar;
