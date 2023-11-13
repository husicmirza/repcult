import React from "react";
import JoinRepcultButton from "../JoinRepcultButton";

export default function Timeline() {
  return (
    <React.Fragment>
      <div className="my-10">
        <h2 className="text-2xl uppercase font-bold text-white text-center">
          How it works
        </h2>
        <div className="container  mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border absolute border-red-600 h-full border-opacity-75 left-1/2"></div>
            <div className="mb-16 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-14 h-14 rounded-full">
                <h1 className="mx-auto font-bold text-3xl text-white">1</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white uppercase text-xl">
                  Join the Cult{" "}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-400 w-2/3">
                  <span className="text-gray-300">Sign up with Rapcult</span>{" "}
                  and be part of an independent record label that understands
                  your ambition and supports your dreams.
                </p>
              </div>
            </div>

            <div className="mb-16 flex justify-between flex-row-reverse items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-14 h-14 rounded-full">
                <h1 className="mx-auto font-bold text-3xl text-white">2</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4 flex items-end flex-col text-end">
                <h3 className="mb-3 font-bold text-white text-xl uppercase">
                  Grant Your Song Rights{" "}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-400 w-2/3">
                  <span className="text-gray-300">Sign up with Rapcult</span>{" "}
                  and be part of an independent record label that understands
                  your ambition and supports your dreams.
                </p>
              </div>
            </div>
            <div className="mb-16 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-red-500 shadow-xl w-14 h-14 rounded-full">
                <h1 className="mx-auto font-bold text-3xl text-white">3</h1>
              </div>
              <div className="order-1 w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white uppercase text-xl">
                  Garner Recognition & Success
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-400 w-2/3">
                  <span className="text-gray-300">Sign up with Rapcult</span>{" "}
                  and be part of an independent record label that understands
                  your ambition and supports your dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <JoinRepcultButton text="Join Repcult" />
        </div>
      </div>
    </React.Fragment>
  );
}
