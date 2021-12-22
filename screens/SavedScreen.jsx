import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CardList from "../components/CardList";

const SavedScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <CardList data="saved" />
  </SafeAreaView>
);

export default SavedScreen;
