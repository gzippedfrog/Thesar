import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import CardList from "../components/CardList";

const SavedScreen = () => {
  const { colors } = useTheme();
  return (
    <>
      <Appbar.Header
        style={{
          margin: 5,
          backgroundColor: colors.primary,
        }}
      >
        <Appbar.Content title="Thesar" />
      </Appbar.Header>
      <CardList data="saved" />
    </>
  );
};

export default SavedScreen;
