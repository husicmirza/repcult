import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

type Variants = "primary" | "secondary";
interface JoinRepcultButtonProps {
  text: string;
  variant?: Variants;
}
export default function JoinRepcultButton({
  variant = "primary",
  text,
}: JoinRepcultButtonProps) {
  const joinRepcultButtonClasses = clsx(
    "text-xs shadow uppercase z-20 font-semibold px-4 py-2",
    {
      "bg-red-500 shadow-red-600 text-white": variant === "primary",
      "bg-white text-gray-900": variant === "secondary",
    }
  );
  return (
    <button className={joinRepcultButtonClasses}>
      {text} <FontAwesomeIcon icon={faArrowRight} size="lg" className="ml-2" />
    </button>
  );
}
