import React, { useContext } from "react";
import { Card, Paragraph } from "react-native-paper";
import SavedContext from "../context/savedContext";

function DefinitionCard({ word }) {
  const { setSaved } = useContext(SavedContext);

  const saveCard = () => {
    setSaved(saved => {
      if (saved.includes(word)) return saved;
      return [...saved, word];
    });
  };

  return (
    <Card
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
      }}
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
