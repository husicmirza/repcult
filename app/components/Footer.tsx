import React from "react";
import JoinRepcultButton from "./JoinRepcultButton";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mb-16 pt-3 uppercase font-semibold text-white gap-y-16">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl text-white uppercase">Rapcult</h3>
        <JoinRepcultButton />
      </div>
      <div className="flex gap-x-24">
        <div>
          <h4 className="text-[10px] text-gray-400 pb-3">Navigate</h4>
          <NavLinks colDirection />
        </div>
        <div>
          <h4 className="text-[10px] text-gray-400 pb-3">Legal</h4>
          <NavLinks colDirection />
        </div>
        <div>
          <h4 className="text-[10px] text-gray-400 pb-3">Social</h4>
          <NavLinks colDirection />
        </div>
      </div>
    </footer>
  );
}
