import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { Theme } from "../styles/themes";

export type RootStackParamList = {
  Results: { data: "results" };
  Saved: { data: "saved" };
};

type ResultsProps = MaterialTopTabScreenProps<RootStackParamList, "Results">;
type SavedProps = MaterialTopTabScreenProps<RootStackParamList, "Saved">;

export type CardListProps = ResultsProps | SavedProps;
export type NavigatorProps = { theme: Theme };
