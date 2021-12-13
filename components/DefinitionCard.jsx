import React from "react";
import { Card, Paragraph } from "react-native-paper";

const DefinitionCard = ({ word }) => (
  <Card style={{ marginBottom: 10 }}>
    <Card.Title title={word.meta.id.replace(/\:.*/, "") + ", " + word.fl} />
    <Card.Content>
      {word.shortdef.map(def => (
        <Paragraph style={{ marginBottom: 10, textAlign: "justify" }} key={def}>
          {def}
        </Paragraph>
      ))}
    </Card.Content>
  </Card>
);

export default DefinitionCard;
