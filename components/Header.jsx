import React, { useState } from "react";
import { Appbar, Searchbar, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { fetchResults } from "../redux/cardsSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const dispatch = useDispatch();
  const { colors, dark } = useTheme();

  function handleSearchSubmit() {
    const query = searchQuery.trim();
    if (!query || query === lastQuery) return;
    setLastQuery(query);
    dispatch(fetchResults(query));
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
        iconColor="#fff"
        inputStyle={{ color: "#fff" }}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        selectionColor={dark ? colors.accent : "orange"}
      />
    </Appbar.Header>
  );
};

export default Header;
