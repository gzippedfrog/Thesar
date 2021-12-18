import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import DefinitionCard from "../components/DefinitionCard";

const SavedScreen = () => {
  const saved = useSelector((state) => state.saved);

  return (
    <ScrollView>
      <View style={{ paddingTop: 10 }}>
        {saved &&
          saved.map((word) => (
            <DefinitionCard word={word} key={word.meta.uuid} />
          ))}
      </View>
    </ScrollView>
  );
};

export default SavedScreen;
