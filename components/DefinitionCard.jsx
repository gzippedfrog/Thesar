import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { saveDefinition } from "../redux/actions";

function DefinitionCard({ word }) {
  const dispatch = useDispatch();

  const saved = useSelector((state) => state.saved);

  const saveCard = () => {
    if (saved.includes(word)) return;
    dispatch(saveDefinition(word));
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
        {word.shortdef.map((def) => (
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
