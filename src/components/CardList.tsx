import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useAppSelector } from "../redux/hooks";
import WordCard from "./WordCard";
import type { CardListProps } from "../navigation/types";

const CardList = ({ route }: CardListProps) => {
  const words = useAppSelector(({ cards }) =>
    Object.values(cards[route.params.data])
  );
  const isLoading = useAppSelector(({ loader }) => loader.visible);
  const { colors, dark } = useTheme();

  return isLoading ? (
    <View style={styles.textContainer}>
      <ActivityIndicator
        size="large"
        color={dark ? colors.accent : colors.primary}
      />
    </View>
  ) : words.length ? (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={words}
      renderItem={({ item }) => <WordCard word={item} />}
      keyExtractor={({ meta }) => meta.uuid}
    />
  ) : (
    <View style={styles.textContainer}>
      <Text>No {route.params.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 10
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CardList;
