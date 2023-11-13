import {
  faChevronDown,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function AmazingBenefitCard() {
  return (
    <>
      <div className="flex flex-col gap-y-3 items-start max-w-xs">
        <FontAwesomeIcon
          icon={faRectangleXmark}
          size="2xl"
          className="text-red-500"
        />
        <h4 className="text-red-500 font-bold uppercase">spotify streams</h4>
        <p className="text-gray-400 text-sm ">
          <span className="text-gray-300">
            Mauris ligula ipsum, pharetra a magna ac, ultrices vulputate arcu.{" "}
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          tortor id felis semper maximus non in est. Mauris a ornare nisi.
        </p>
        <button className="text-red-500 uppercase text-sm">
          Show more
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
            className="text-red-500 ml-2"
          />
        </button>
      </div>
    </>
  );
}
