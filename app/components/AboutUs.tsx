import React from "react";
import AmazingBenefitCard from "./AmazingBenefitCard";

export default function AboutUs() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-y-6 rounded-3xl py-10 bg-[#282c2c] w-full">
        <h4 className="text-gray-400 uppercase text-sm">
          technology trusted by
        </h4>
        <div className="grid-cols-4 gap-10 grid py-4">
          {Array.from({ length: 4 }, (_, index) => {
            return (
              <div
                key={index}
                className="py-4 px-16 border uppercase text-sm text-gray-400"
              >
                logo
              </div>
            );
          })}
        </div>
        <h2 className="text-2xl uppercase font-bold text-white">
          Amazing benefits
        </h2>
        <div className="px-10 py-6 w-full">
          <div className="grid grid-cols-3 gap-10">
            {Array.from({ length: 6 }, (_, index) => {
              return <AmazingBenefitCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
