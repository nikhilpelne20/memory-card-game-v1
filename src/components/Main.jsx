import React, { useEffect, useState } from "react";
import Header from "./Header";
import ScoreGrid from "./Scores/ScoreGrid";
import CardGrid from "./Cards/CardGrid";
import shuffleArray from "./Utils/Utils";

export default function Main() {
  const characterCount = 24;
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [CurrentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setCharacters(shuffleArray(await fetchCharacter(characterCount)));
    };
    loadCards();
  }, []);

  const fetchCharacter = async (characterCount) => {
    const characterArray = [];
    for (let i = 13; i <= characterCount; i++) {
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
    setCharacters(shuffleArray(characters));
  };

  const playRound = (charName) => {
    if (clickedCharacters.includes(charName)) {
      resetGame();
    } else {
      const currScore = CurrentScore + 1;
      if (currScore > bestScore) {
        setBestScore((prev) => prev + 1);
      }
      setCurrentScore((prev) => prev + 1);
      setClickedCharacters((prev) => [...prev, charName]);
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCharacters([]);
  };
  return (
    <div>
      <ScoreGrid currentScore={CurrentScore} bestScore={bestScore} />
      <CardGrid characters={characters} onCardClick={handleCardClick} />
    </div>
  );
}
