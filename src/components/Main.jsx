import React, { useEffect, useState } from "react";
import Header from "./Header";
import Scores from "./Scores/Scores";
import CardGrid from "./Cards/CardGrid";
import shuffleArray from "./Utils/Utils";

export default function Main() {
  const [character, setCharacter] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedChar, setClickedChar] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setCharacter(shuffleArray(await fetchCharacter()));
    };
    loadCards();
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

  const handleCardClick = (e) => {
    const charName = e.target.parentNode.lastChild.textContent;
    playRound(charName);
    setCharacter(shuffleArray(character));
  };

  const playRound = (charName) => {
    if (clickedChar.includes(charName)) {
      console.log("gameOver");
    } else {
      setClickedChar((prev) => [...prev, charName]);
    }
  };
  return (
    <div>
      <Header />
      <Scores score={score} best={bestScore} />
      {character ? (
        <CardGrid characters={character} onCardClick={handleCardClick} />
      ) : (
        <h1>Waiting...</h1>
      )}
    </div>
  );
}
