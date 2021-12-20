import React from "react";
import { Snackbar } from "react-native-paper";
import { useSelector } from "react-redux";

const Bar = () => {
  const bar = useSelector((state) => state.bar);

  return (
    <Snackbar style={{ marginBottom: 60 }} visible={bar.visible}>
      {bar.message}
    </Snackbar>
  );
};

export default Bar;
