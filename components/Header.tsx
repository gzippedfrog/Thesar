import React, { useState } from "react";
import { Appbar, Searchbar, useTheme } from "react-native-paper";
import { fetchResults } from "../redux/cardsSlice";
import { useAppDispatch } from "../redux/hooks";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const dispatch = useAppDispatch();
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
        iconColor="#fff"
        inputStyle={{ color: "#fff" }}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        selectionColor={dark ? colors.accent : "orange"}
      />
    </Appbar.Header>
  );
};

export default Header;
