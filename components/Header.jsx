import React, { useState } from "react";
import { Appbar, Searchbar, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const dispatch = useDispatch();
  const { colors } = useTheme();

  function handleSearchSubmit() {
    const query = searchQuery.trim();
    if (!query || query === lastQuery) return;
    setLastQuery(query);
    dispatch(fetchResults(searchQuery.trim()));
  }

  const styles = {
    backgroundColor: colors.primary,
    elevation: 0,
  };

  return (
    <Appbar.Header style={styles}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearchSubmit}
        style={styles}
        selectionColor={colors.accent}
      />
    </Appbar.Header>
  );
};

export default Header;
