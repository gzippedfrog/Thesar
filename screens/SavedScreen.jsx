import React from "react";
import { ScrollView, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";

function SavedScreen() {
  const saved = useSelector((state) => state.saved);

  return (
    <ScrollView>
      <View style={{ paddingTop: 10 }}>
        {saved &&
          saved.map((definition) => (
            <Card
              style={{
                marginHorizontal: 10,
                marginBottom: 10,
              }}
            >
              <Card.Title
                title={
                  definition.meta.id.replace(/\:.*/, "") + ", " + definition.fl
                }
              />
              <Card.Content>
                {definition.shortdef.map((def) => (
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
      </View>
    </ScrollView>
  );
}

export default SavedScreen;
