import React, { useEffect, useState } from "react";
import Header from "./Header";
import Scores from "./Scores/Scores";
import CardGrid from "./Cards/CardGrid";

export default function Main() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter().then((characterArray) => {
      setCharacter(characterArray);
    });
  }, []);

  const fetchCharacter = async () => {
    const characterArray = [];
    for (let i = 1; i <= 12; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${i}`
      );
      const characterData = await response.json();
      const id = characterData.id;
      const name = characterData.name;
      const imgUrl = characterData.image;
      characterArray.push({ id, name, imgUrl });
    }
    return characterArray;
  };
  return (
    <div>
      <Header />
      <Scores />
      {character ? <CardGrid character={character} /> : <h1>Waiting...</h1>}
    </div>
  );
}
