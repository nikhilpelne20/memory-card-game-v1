import React from "react";

export default function Scores({score,best}) {
  return (
    <div className="text-2xl font-semibold text-[#FFEDD8] bg-[#240A34] flex justify-center gap-8 pt-[30px] pb-[40px]">
      <p>Score: {score}</p>
      <p>Best score: {best}</p>
    </div>
  );
}
