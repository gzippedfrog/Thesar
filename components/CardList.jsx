import React from "react";
import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const CardList = ({ data }) => {
  const words = useSelector((state) => state[data]);
  const ids = Object.keys(words);

  return ids.length ? (
    <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
      {ids.map((id) => (
        <WordCard word={words[id]} key={id} />
      ))}
    </ScrollView>
  ) : (
    <View style={{ paddingTop: 10 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        No results 🤔
      </Text>
    </View>
  );
};

export default CardList;
