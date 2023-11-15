import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PackageItem({
  packageNumber,
}: {
  packageNumber: number;
}) {
  return (
    <div className="border rounded-lg flex flex-col items-center max-w-xs px-10 bg-[#25282b] shadow-sm shadow-[#25282b] py-6 w-full border-[#25282b] gap-y-2">
      <h4 className="text-gray-400 text-sm uppercase">
        package #{packageNumber}
      </h4>
      <h2 className="text-4xl font-bold text-red-500 uppercase">Bronze</h2>
      <div className="h-1 w-full border-b border-gray-400"></div>
      <div className="flex flex-col gap-y-4 w-full mt-2">
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faCheck} className="text-red-500" size="sm" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faCheck} className="text-red-500" size="sm" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faCheck} className="text-red-500" size="sm" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faCheck} className="text-red-500" size="sm" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center gap-x-3">
          <FontAwesomeIcon icon={faCheck} className="text-red-500" size="sm" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
      </div>
    </div>
  );
}
