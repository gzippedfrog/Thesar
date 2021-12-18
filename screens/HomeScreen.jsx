import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Searchbar, Snackbar } from "react-native-paper";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchResults } from "../redux/actions";

import DefinitionCard from "../components/DefinitionCard";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");
  const results = useSelector((state) => state.results);
  const barVisible = useSelector((state) => state.barVisible);
  const dispatch = useDispatch();

  return (
    <>
      <View style={{ backgroundColor: "#6200ee", padding: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={() => dispatch(fetchResults(searchQuery))}
        />
      </View>

      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          {results[0]?.meta ? (
            results.map((word) => (
              <DefinitionCard word={word} key={word.meta.uuid} />
            ))
          ) : (
            <View>
              <Text style={{ textAlign: "center" }}>No results</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Snackbar visible={barVisible}>Card has been saved</Snackbar>
    </>
  );
};

export default HomeScreen;
