import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchResults } from "../redux/actions";
import DefinitionCard from "../components/DefinitionCard";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const results = useSelector((state) => state.results);

  const dispatch = useDispatch();

  return (
    <>
      <View style={{ backgroundColor: "#6200ee" }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={() => dispatch(fetchResults(searchQuery))}
          style={{ margin: 10 }}
        />
      </View>

      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          {results[0]?.meta ? (
            results.map((def) => (
              <DefinitionCard word={def} key={def.meta.uuid} />
            ))
          ) : (
            <Text style={{ textAlign: "center" }}>No results</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
