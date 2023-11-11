import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function JoinRepcultButton() {
  return (
    <button className="px-4 py-2 bg-red-500 uppercase text-xs shadowz shadow-red-600 font-semibold text-white">
      Join Rapcult
      <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
    </button>
  );
}
