import React, { useState } from "react";
import { Appbar, Searchbar, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const { colors } = useTheme();

  function handleSearchSubmit() {
    if (!searchQuery.trim()) return;
    dispatch(fetchResults(searchQuery.trim()));
  }

  return (
    <Appbar.Header
      style={{
        backgroundColor: colors.primary,
        margin: 5,
        elevation: 0,
      }}
    >
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearchSubmit}
        style={{
          elevation: 0,
          backgroundColor: colors.primary,
        }}
        selectionColor={colors.accent}
      />
    </Appbar.Header>
  );
};

export default Header;
