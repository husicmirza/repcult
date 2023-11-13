import React from "react";
import JoinRepcultButton from "../JoinRepcultButton";

export default function JoinUs() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center my-20 max-w-2xl mx-auto text-center uppercase text-white">
        <h1 className="text-5xl font-bold">
          Dominate the industry with Rapcult
        </h1>
        <p className="text-gray-400 text-sm my-5 leading-5 tracking-wider">
          Join us, garner recognition,
          <br /> and stream your way to success
        </p>
        <JoinRepcultButton text="Join Repcult" />
      </div>
    </React.Fragment>
  );
}
