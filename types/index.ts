export type Timer = ReturnType<typeof setTimeout>;

export interface BarState {
  visible: boolean;
  message: string | null;
  timer: Timer | null;
}

export interface Word {
  meta: {
    uuid: string;
    id: string;
    syns: Array<Array<string>>;
  };
  shortdef: string[];
  fl: string;
}

export interface Words {
  [index: string]: Word;
}

export interface CardsState {
  results: Words;
  saved: Words;
}

export interface LoaderState {
  visible: boolean;
}

export interface WordCardProps {
  word: Word;
}

export interface CardListProps {
  route: {
    params: {
      data: "results" | "saved";
    };
  };
}
