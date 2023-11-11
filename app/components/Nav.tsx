"use client";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import JoinRepcultButton from "./JoinRepcultButton";
import NavLinks from "./NavLinks";
const Nav = () => {
  const isUserLoggedIn = true;
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
              <Link
                href={"/profile"}
                className="doropdown_link"
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                My Profile
              </Link>
              <Link
                href={"/create-prompt"}
                className="doropdown_link"
                onClick={() => setToggleDropdown((prev) => !prev)}
              >
                Create Prompt
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
