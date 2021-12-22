import React from "react";
import { Card, Paragraph, Text, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { removeWord, saveWord } from "../redux/actions";

const WordCard = ({ word }) => {
  const saved = useSelector((state) => state.saved);
  const dispatch = useDispatch();
  const { colors } = useTheme();

  function onCardLongPress() {
    if (saved[word.meta.uuid]) {
      dispatch(removeWord(word));
    } else {
      dispatch(saveWord(word));
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
      <Card.Title title={word.meta.id.replace(/\:.*/, "")} subtitle={word.fl} />
      <Card.Content>
        {word.shortdef.map((def, i) => (
          <Paragraph
            style={{
              marginBottom: 20,
              textAlign: "justify",
            }}
            key={def}
          >
            {def + "\n"}
            <Text style={{ color: colors.primary }}>synonyms: </Text>
            {word.meta.syns[i].join(", ")}
          </Paragraph>
        ))}
      </Card.Content>
    </Card>
  );
};

export default WordCard;
