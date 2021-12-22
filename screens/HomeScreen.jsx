import React, { useState } from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Appbar } from "react-native-paper";
import { fetchResults } from "../redux/actions";
import CardList from "../components/CardList";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");
  const dispatch = useDispatch();
  const { colors } = useTheme();

  function handleSearchSubmit() {
    if (!searchQuery.trim()) return;
    dispatch(fetchResults(searchQuery.trim()));
  }

  return (
    <>
      <Appbar.Header
        style={{
          margin: 5,
          backgroundColor: colors.primary,
          // flex: 1,
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={handleSearchSubmit}
          style={{ width: "100%" }}
        />
      </Appbar.Header>
      <CardList data="results" />
    </>
  );
};

export default HomeScreen;
