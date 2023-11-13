import React from "react";
import JoinRepcultButton from "../JoinRepcultButton";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-3">
        <h4 className="text-lg uppercase text-white">
          Do you still have questions?{" "}
        </h4>
        <div className="bg_secondary  border rounded-xl text-gray-300 px-4 border-opacity-25 shadow-md border-white h-full flex flex-col items-center justify-between">
          <p className="text-xs text-center mt-3 w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            varius purus.
          </p>
          <div className="flex flex-col gap-y-1 w-full mb-2 uppercase text-sm">
            First Name
            <input
              className="bg-transparent border border-gray-500 py-1.5 px-2"
              placeholder="John"
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full mb-2 uppercase text-sm">
            Email
            <input
              className="bg-transparent border border-gray-500 py-1.5 px-2"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full mb-2 uppercase text-sm">
            Phone Number
            <input
              className="bg-transparent border border-gray-500 py-1.5 px-2"
              placeholder="+034 2135899"
            />
          </div>
          <div className="flex flex-col gap-y-1 w-full mb-2 uppercase text-sm">
            Message from you to rapcult
            <textarea
              className="bg-transparent border border-gray-500 py-1.5 px-2"
              placeholder="+034 2135899"
              rows={3}
            />
          </div>
          <div className="self-start mb-3">
            <JoinRepcultButton text="send message" />
          </div>
        </div>
      </div>
    </>
  );
}
