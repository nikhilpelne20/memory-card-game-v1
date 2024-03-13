import React from "react";
import logo from "../assets/rickandmorty.png";

export default function Header() {
  return (
    <div className="flex justify-center pt-[10px] pb-[10px]">
      <img src={logo} alt="logo" />
    </div>
  );
}
