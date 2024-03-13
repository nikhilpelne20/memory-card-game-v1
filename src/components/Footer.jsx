import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center pt-[5px] pb-[5px] bg-[#891652] items-center gap-2">
      <p className="text-2xl text-[#FFEDD8]">Copyright © 2024 nikhilpelne</p>
      <a href="https://github.com/nikhilpelne20">
    <FaGithub className="text-2xl text-[#FFEDD8]" />
  </a>
    </div>
  );
}
