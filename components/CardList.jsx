import React from "react";
import { Text } from "react-native-paper";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const CardList = ({ data }) => {
  const words = useSelector((state) => Object.values(state[data]));

  return words.length ? (
    <FlatList
      contentContainerStyle={{ paddingTop: 10 }}
      data={words}
      renderItem={({ item }) => <WordCard word={item} />}
      keyExtractor={(word) => word.meta.uuid}
    />
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
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
