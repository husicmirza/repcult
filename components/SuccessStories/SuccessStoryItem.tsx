import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SuccessStoryItem() {
  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-[#25282b] bg-[#25282b] shadow-[#25282b]">
        <div className="w-full md:w-1/3 grid place-items-center">
          <img
            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="tailwind logo"
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
          <h3 className="font-bold text-red-500 text-xl">FUCKING AMAZING!</h3>
          <p className="text-white font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec nunc sit amet nibh vulputate hendrerit. Curabitur
            placerat augue eu ligula volutpat, eu consectetur est sollicitudin.
          </p>
          <div className="flex gap-x-8">
            <div className="flex flex-col font-semibold text-gray-400 uppercase">
              <p>
                +1100,000
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="text-red-500 ml-2"
                />{" "}
              </p>
              <span className="text-sm font-light">Streams</span>
            </div>
            <div className="flex flex-col font-semibold text-gray-400 uppercase">
              <p>
                +1100,000
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="text-red-500 ml-2"
                />{" "}
              </p>
              <span className="text-sm font-light">Streams</span>
            </div>
            <div className="flex flex-col font-semibold text-gray-400 uppercase">
              <p>
                +1100,000
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="text-red-500 ml-2"
                />{" "}
              </p>
              <span className="text-sm font-light">Streams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
