import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DefinitionCard from "../components/DefinitionCard";
import ResultsContext from "../context/resultsContext";

const key = "0a97f0e1-ac7e-41ca-9422-f61d039223b9";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const { results, setResults } = useContext(ResultsContext);

  const fetchResults = () => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchQuery}?key=${key}
`)
      .then(response => response.json())
      .then(setResults);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Searchbar
          style={{ margin: 10 }}
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
}

export default HomeScreen;
