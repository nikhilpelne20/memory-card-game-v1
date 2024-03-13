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
    <div className="bg-[#240A34] pb-[50px]">
      <div className="grid grid-cols-4 w-[1600px] m-auto justify-items-center gap-y-16">
        {allCharacter}
      </div>
    </div>
  );
}
