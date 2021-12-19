import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import Bar from "../components/Bar";
import DefinitionCard from "../components/DefinitionCard";

const SavedScreen = () => {
  const saved = useSelector((state) => state.saved);
  const ids = Object.keys(saved);

  return (
    <>
      <ScrollView>
        <View style={{ paddingTop: 10 }}>
          {saved &&
            ids.map((id) => <DefinitionCard word={saved[id]} key={id} />)}
        </View>
      </ScrollView>
      <Bar />
    </>
  );
};

export default SavedScreen;
