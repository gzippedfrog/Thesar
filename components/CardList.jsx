import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const CardList = ({ data }) => {
  const words = useSelector((state) => Object.values(state[data]));

  return words.length ? (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={words}
      renderItem={({ item }) => <WordCard word={item} />}
      keyExtractor={(word) => word.meta.uuid}
    />
  ) : (
    <View style={styles.textContainer}>
      <Text>No results </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CardList;
