import { StyleSheet } from "react-native";
import { Card, Paragraph, Text, useTheme } from "react-native-paper";
import { updateSaved } from "../features/cards/actions";
import { useAppDispatch } from "../redux/hooks";
import type { WordCardProps } from "../features/cards/types";

const WordCard = ({ word }: WordCardProps) => {
  const dispatch = useAppDispatch();
  const { colors, dark } = useTheme();

  const onCardLongPress = () => dispatch(updateSaved(word));

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
