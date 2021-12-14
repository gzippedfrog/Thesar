import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SavedContext from "../context/savedContext";

function SavedScreen() {
  const { saved } = useContext(SavedContext);

  return (
    <ScrollView>
      {saved &&
        saved.map(word => (
          <Card style={{ margin: 10 }} key={word.meta.uuid}>
            <Card.Title
              title={word.meta.id.replace(/\:.*/, "") + ", " + word.fl}
            />
            <Card.Content>
              {word.shortdef.map(def => (
                <Paragraph
                  style={{ marginBottom: 10, textAlign: "justify" }}
                  key={def}
                >
                  {def}
                </Paragraph>
              ))}
            </Card.Content>
          </Card>
        ))}
    </ScrollView>
  );
}

export default SavedScreen;
