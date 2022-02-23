import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Appbar, Searchbar, useTheme } from "react-native-paper";
import { fetchResults } from "../features/cards/actions";
import { useAppDispatch } from "../redux/hooks";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const dispatch = useAppDispatch();

  const { colors } = useTheme();
  const styles = getStyles(colors);

  function handleSearchSubmit() {
    const query = searchQuery.trim();
    if (!query || query === lastQuery) return;
    setLastQuery(query);
    dispatch(fetchResults(query));
  }

  return (
    <Appbar.Header style={styles.header}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearchSubmit}
        style={styles.header}
        iconColor="white"
        inputStyle={styles.input}
        placeholderTextColor="rgba(255,255,255,0.5)"
        selectionColor="orange"
      />
    </Appbar.Header>
  );
};

const getStyles = (colors: ReactNativePaper.ThemeColors) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      elevation: 0
    },
    input: {
      color: "white"
    }
  });

export default Header;
