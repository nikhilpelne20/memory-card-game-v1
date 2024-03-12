import React from "react";

export default function Card({ img, name }) {
  return (
    <div className="w-[300px] h-[370px] bg-[#891652] flex flex-col items-center rounded-lg hover:scale-105 duration-300 cursor-pointer">
      <div className="p-2">
        <img className="rounded-lg" src={img} alt={name} />
      </div>
      <p className="text-2xl font-semibold mt-3 text-[#FFEDD8]">{name}</p>
    </div>
  );
}
