"use client";

import Link from "next/link";
import { useState } from "react";
import JoinRepcultButton from "../Button/JoinRepcultButton";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-10 uppercase font-semibold text-white container mx-auto">
      <Link href={`/`} className="font-bold text-2xl">
        Rapcult
      </Link>
      <div className="sm:flex hidden">
        <NavLinks />
      </div>
      <div className="sm:flex hidden">
        <JoinRepcultButton text="Join Repcult" />
      </div>
      <div className="sm:hidden flex relative">
        <div className="flex">
          <FaBars
            size="32px"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <NavLinks colDirection />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
