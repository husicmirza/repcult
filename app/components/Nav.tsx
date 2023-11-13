"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import JoinRepcultButton from "./JoinRepcultButton";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3 uppercase font-semibold text-white container mx-auto">
      <Link href={`/`} className="font-bold text-2xl">
        Rapcult
      </Link>
      <div className="sm:flex hidden">
        <NavLinks />
      </div>
      <div className="sm:flex hidden">
        <JoinRepcultButton />
      </div>
      <div className="sm:hidden flex relative">
        <div className="flex">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
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
