import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SavedScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Text>Saved Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SavedScreen;
