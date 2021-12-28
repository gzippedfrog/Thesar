import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import WordCard from "./WordCard";

const CardList = ({ route }) => {
  const words = useSelector((state) => Object.values(state[route.params.data]));
  const isLoading = useSelector((state) => state.isLoading);
  const { colors } = useTheme();

  return words.length ? (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={words}
      renderItem={({ item }) => <WordCard word={item} />}
      keyExtractor={(word) => word.meta.uuid}
    />
  ) : (
    <View style={styles.textContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.accent} />
      ) : (
        <Text>No results </Text>
      )}
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
