import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { useDispatch } from "react-redux";
import { saveDefinition } from "../redux/actions";

function DefinitionCard({ word: definition }) {
  const dispatch = useDispatch();

  const saveCard = () => dispatch(saveDefinition(definition));

  return (
    <Card
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
      }}
      onLongPress={saveCard}
    >
      <Card.Title
        title={definition.meta.id.replace(/\:.*/, "") + ", " + definition.fl}
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
  );
}

export default DefinitionCard;
