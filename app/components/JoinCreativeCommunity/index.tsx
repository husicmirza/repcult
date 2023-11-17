import React from "react";

export default function JoinCreativeCommunity() {
  return (
    <div className="flex flex-col px-10 py-12">
      <h1 className="text-5xl font-bold uppercase text-white w-1/3">
        join Creative community
      </h1>
      <div className="flex gap-x-10 -rotate-6 py-8">
        {/* TODO: refactor, use Image from next */}
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          className="rounded-xl"
        />{" "}
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          className="rounded-xl"
        />
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          className="rounded-xl"
        />
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <h1 className="text-5xl font-bold uppercase text-gray-400 self-end w-1/4 text-end">
        of creators like you
      </h1>
    </div>
  );
}
