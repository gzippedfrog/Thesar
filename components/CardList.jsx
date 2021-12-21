import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const CardList = ({ data }) => {
  const words = useSelector((state) => state[data]);
  const ids = Object.keys(words);

  return ids.length ? (
    <ScrollView>
      <View style={{ paddingTop: 10 }}>
        {ids.map((id) => (
          <WordCard word={words[id]} key={id} />
        ))}
      </View>
    </ScrollView>
  ) : (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ textAlign: "center" }}>No results</Text>
    </View>
  );
};

export default CardList;
