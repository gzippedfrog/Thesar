import React from "react";
import { Snackbar } from "react-native-paper";
import { useAppSelector } from "../redux/hooks";

const Snack = () => {
  const bar = useAppSelector(({ bar }) => bar);

  return (
    <Snackbar
      visible={bar.visible}
      children={bar.message}
      onDismiss={() => {}}
    />
  );
};

export default Snack;
