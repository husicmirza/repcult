import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Faq() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-3">
        <h4 className="text-lg uppercase text-white">
          Frequently asked questions
        </h4>
        <div className="border rounded-xl px-4 border-opacity-25 shadow-md border-white h-full flex flex-col justify-center">
          {Array.from({ length: 7 }, (_, index) => {
            return (
              <div
                className={`py-4 text-sm text-white ${
                  index != 6 ? "border-b" : ""
                }`}
                key={index}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  className="ml-4"
                  color="red"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
