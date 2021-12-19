import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { removeDefinition, saveDefinition } from "../redux/actions";

const DefinitionCard = ({ word }) => {
  const saved = useSelector((state) => state.saved);
  const dispatch = useDispatch();

  function onCardLongPress() {
    if (saved[word.meta.uuid]) {
      dispatch(removeDefinition(word));
    } else {
      dispatch(saveDefinition(word));
    }
  }

  return (
    <Card
      style={{
        marginHorizontal: 10,
        marginBottom: 10,
      }}
      onLongPress={onCardLongPress}
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
};

export default DefinitionCard;
