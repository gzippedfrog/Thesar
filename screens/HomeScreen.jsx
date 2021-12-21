import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";
import CardList from "../components/CardList";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");
  const dispatch = useDispatch();

  function handleSearchSubmit() {
    if (!searchQuery.trim()) return;
    dispatch(fetchResults(searchQuery.trim()));
  }

  // useEffect(() => dispatch(fetchResults(searchQuery)), []);

  return (
    <>
      <View style={{ backgroundColor: "#6200ee", padding: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>

      <CardList data="results" />
    </>
  );
};

export default HomeScreen;
