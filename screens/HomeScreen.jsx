import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchResults } from "../redux/actions";
import DefinitionCard from "../components/DefinitionCard";
import Bar from "../components/Bar";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("cat");

  const results = useSelector((state) => state.results);
  const ids = Object.keys(results);

  const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchResults(searchQuery)), []);

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
          {results ? (
            ids.map((id) => <DefinitionCard word={results[id]} key={id} />)
          ) : (
            <View>
              <Text style={{ textAlign: "center" }}>No results</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Bar />
    </>
  );
};

export default HomeScreen;
