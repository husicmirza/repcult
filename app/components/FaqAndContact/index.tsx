import React from "react";
import JoinRepcultButton from "../JoinRepcultButton";
import Faq from "./Faq";

export default function FaqAndContact() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-y-6 mt-20 mb-10 w-full">
        <div className="rounded-xl flex justify-between items-center shadow-red-600 shadow-md outline-red-400 px-8 py-10 bg-red-500">
          <h1 className="text-white font-bold text-4xl uppercase w-1/2">
            get your success story with rapcult
          </h1>
          <JoinRepcultButton variant="secondary" />
        </div>
        <div className="flex justify-between gap-x-14">
          <Faq />
          <Faq />
          {/* <Contact />{" "} */}
        </div>
      </div>
    </React.Fragment>
  );
}
