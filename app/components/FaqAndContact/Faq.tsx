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
        <div className="border rounded-xl px-4">
          {Array.from({ length: 6 }, (_, index) => {
            return (
              <div
                className={`py-4  text-white ${index != 5 ? "border-b" : ""}`}
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
