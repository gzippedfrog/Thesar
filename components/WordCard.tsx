import React from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph, Text, useTheme } from "react-native-paper";
import { removeWord, saveWord } from "../redux/cardsSlice";
import { showMessage } from "../redux/barSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const WordCard = ({ word }) => {
  const saved = useAppSelector((state) => state.cards.saved);
  const dispatch = useAppDispatch();
  const { colors, dark } = useTheme();

  function onCardLongPress() {
    if (saved[word.meta.uuid]) {
      dispatch(removeWord(word));
      dispatch(showMessage("Card removed"));
    } else {
      dispatch(saveWord(word));
      dispatch(showMessage("Card saved"));
    }
  }

  return (
    <Card style={styles.card} onLongPress={onCardLongPress}>
      <Card.Title title={word.meta.id.replace(/\:.*/, "")} subtitle={word.fl} />
      <Card.Content>
        {word.shortdef.map((def: string, i: number) => (
          <Paragraph style={styles.paragraph} key={def}>
            {def + "\n"}
            <Text style={{ color: dark ? colors.accent : colors.primary }}>
              synonyms:{" "}
            </Text>
            {word.meta.syns[i].join(", ")}
          </Paragraph>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 20,
    textAlign: "justify",
  },
});

export default WordCard;
