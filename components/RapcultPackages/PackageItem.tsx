import React from "react";
import { FaCheck } from "react-icons/fa";

export default function PackageItem({
  packageNumber,
}: {
  packageNumber: number;
}) {
  return (
    <div className="border cursor-pointer rounded-lg flex flex-col transition ease-in-out delay-150 hover:-translate-y-1  hover:shadow-xl duration-300 items-center max-w-xs px-10 bg-[#25282b] shadow-sm shadow-[#25282b] py-6 w-full border-[#25282b] gap-y-2">
      <h4 className="text-gray-400 text-sm uppercase">
        package #{packageNumber}
      </h4>
      <h2 className="text-4xl font-bold text-red-500 uppercase">Bronze</h2>
      <div className="h-1 w-full border-b border-gray-400"></div>
      <div className="flex flex-col gap-y-4 w-full mt-2">
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <FaCheck className="text-red-500" size="24px" />
          <div className="text-gray-400">lorem ipsum</div>
        </div>
      </div>
    </div>
  );
}
