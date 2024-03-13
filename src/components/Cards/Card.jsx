import React from "react";

export default function Card({ character, handleCardClick }) {
  return (
    <div
      className="bg-[#891652] rounded-lg cursor-pointer hover:scale-105 duration-300 h-[285px]"
      onClick={handleCardClick}
    >
      <img
        className="rounded-t-lg"
        src={character.imgUrl}
        alt={character.name}
      />
      <p className="text-xl font-semibold pt-3 pb-3 text-[#FFEDD8] text-center">
        {character.name}
      </p>
    </div>
  );
}
