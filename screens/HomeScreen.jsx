import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";
import WordCard from "../components/WordCard";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");

  const results = useSelector((state) => state.results);
  const ids = Object.keys(results);

  const dispatch = useDispatch();

  function handleSubmitSearch() {
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
          onSubmitEditing={handleSubmitSearch}
        />
      </View>

      <View style={{ flex: 1 }}>
        {ids.length ? (
          <ScrollView>
            <View style={{ paddingTop: 10 }}>
              {ids.map((id) => (
                <WordCard word={results[id]} key={id} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={{ paddingTop: 20 }}>
            <Text style={{ textAlign: "center" }}>No results</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default HomeScreen;
