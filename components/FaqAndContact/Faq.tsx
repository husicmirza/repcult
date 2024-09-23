"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Faq() {
  const [collapsedItems, setCollapsedItems] = useState(Array(7).fill(true));

  const handleToggleCollapse = (index: number) => {
    const newCollapsedItems = Array(7).fill(true);
    newCollapsedItems[index] = !newCollapsedItems[index];
    setCollapsedItems(newCollapsedItems);
  };
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
                className={`py-4 text-sm text-white flex items-center justify-center ${
                  index != 6 ? "border-b" : ""
                }`}
                key={index}
                onClick={() => handleToggleCollapse(index)}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <FaAngleDown className="ml-4" color="red" />
                {!collapsedItems[index] && (
                  <div className="mt-1 text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
