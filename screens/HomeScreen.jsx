import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar, Card, Paragraph } from "react-native-paper";
import DefinitionCard from "../components/DefinitionCard";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchQuery}?key=${key}
`)
      .then(response => response.json())
      .then(setResults);
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView>
        <Searchbar
          style={{ marginBottom: 10 }}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={fetchResults}
        />
        {results &&
          results.map(def => <DefinitionCard word={def} key={def.meta.uuid} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
