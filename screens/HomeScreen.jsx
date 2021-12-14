import React, { useContext, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import DefinitionCard from "../components/DefinitionCard";
import ResultsContext from "../context/resultsContext";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("cat");
  const { results, setResults } = useContext(ResultsContext);

  const fetchResults = () => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchQuery}?key=${key}
`)
      .then(response => response.json())
      .then(setResults);
  };

  return (
    <>
      <View style={{ backgroundColor: "#6200ee" }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={fetchResults}
          style={{ margin: 10 }}
        />
      </View>

      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          {results[0]?.meta ? (
            results.map(def => (
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
