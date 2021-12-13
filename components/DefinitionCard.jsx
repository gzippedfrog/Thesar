import React from "react";
import { Card, Paragraph } from "react-native-paper";

function DefinitionCard({ word }) {
  const saveCard = () => {
    console.log("saved");
  };

  return (
    <Card
      style={{ marginBottom: 10, marginHorizontal: 10 }}
      onLongPress={saveCard}
    >
      <Card.Title title={word.meta.id.replace(/\:.*/, "") + ", " + word.fl} />
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
  );
}

export default DefinitionCard;
