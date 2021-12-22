import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { removeWord, saveWord } from "../redux/actions";

const WordCard = ({ word }) => {
  const saved = useSelector((state) => state.saved);
  const dispatch = useDispatch();

  function onCardLongPress() {
    if (saved[word.meta.uuid]) {
      dispatch(removeWord(word));
    } else {
      dispatch(saveWord(word));
    }
  }

  // because of react-native-paper bug, TouchableOpacity
  // is needed to stop app from crashing when the theme switches
  return (
    <TouchableOpacity>
      <Card
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
        }}
        onLongPress={onCardLongPress}
      >
        <Card.Title
          title={word.meta.id.replace(/\:.*/, "")}
          subtitle={word.fl}
        />
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
    </TouchableOpacity>
  );
};

export default WordCard;
