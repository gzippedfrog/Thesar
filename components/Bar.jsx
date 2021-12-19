import React from "react";
import { Snackbar } from "react-native-paper";
import { useSelector } from "react-redux";

const Bar = () => {
  const barVisible = useSelector((state) => state.barVisible);
  const barMessage = useSelector((state) => state.barMessage);
  return (
    <Snackbar style={{ marginBottom: 60 }} visible={barVisible}>
      {barMessage}
    </Snackbar>
  );
};

export default Bar;
