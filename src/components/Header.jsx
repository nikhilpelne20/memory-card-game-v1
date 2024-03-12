import React from "react";
import logo from "../assets/rickandmorty.png";

export default function Header() {
  return (
    <div className="flex justify-center bg-[#240A34] pt-[10px] pb-[10px]">
      <img className="w-[800px]" src={logo} alt="logo" />
    </div>
  );
}
