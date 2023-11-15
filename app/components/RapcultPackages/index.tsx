import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PackageItem from "./PackageItem";

export default function RapcultPackages() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-y-6 rounded-3xl py-10 bg-[#282c2c] text-white w-full">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-5xl font-bold uppercase text-center">
            join Rapcult
          </h1>
          <h1 className="text-xl text-center font-bold text-gray-400 uppercase mt-3">
            all artists are welcome to get in touch, ra p cult is welcoming and
            su pp orti v e community
          </h1>
          <div className="my-6">
            <div className="flex flex-col gap-y-1 w-full uppercase text-sm">
              Paste your Spotify link to get the right package
              <div className="relative">
                <input
                  className="bg-transparent border border-gray-500 py-3 px-2 w-full"
                  placeholder="John"
                />
                <FontAwesomeIcon
                  icon={faCircleRight}
                  color="red"
                  size="2xl"
                  className="absolute right-2 top-2 bg-white rounded-full shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-6 py-4 overflow-x-scroll no-scrollbar w-2/3">
          {Array.from({ length: 7 }, (_, index) => {
            return <PackageItem packageNumber={index + 1} key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
