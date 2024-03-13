import React from "react";
import Card from "./Card";

export default function CardGrid({ characters, onCardClick }) {
  const allCharacter = characters.map((character) => (
    <Card
      character={character}
      key={character.id}
      handleCardClick={onCardClick}
    />
  ));

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-y-16 gap-x-16 max-w-[1200px] m-auto p-[40px]">
      {allCharacter}
    </div>
  );
}
