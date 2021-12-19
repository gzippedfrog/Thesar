import React from "react";
import WordCard from "./WordCard";
import { useSelector } from "react-redux";

const CardList = ({ key }) => {
  const words = useSelector((state) => state[key]);
  const ids = Object.keys(words);
  return ids.map((id) => <WordCard word={saved[id]} key={id} />);
};

export default CardList;
