export interface Word {
  meta: {
    uuid: string;
    id: string;
    syns: string[][];
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

export interface WordCardProps {
  word: Word;
}
