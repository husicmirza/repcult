import clsx from "clsx";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Variants = "primary" | "secondary";
interface JoinRepcultButtonProps {
  text: string;
  variant?: Variants;
  onClick?: () => void;
}
//TODO: refactor component name to Button
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
    <button className={joinRepcultButtonClasses} type="submit">
      <div className="flex items-center justify-center">
        {text} <FaArrowRight className="ml-2" />
      </div>
    </button>
  );
}
