"use client";

import React, { useRef } from "react";
import PackageItem from "./PackageItem";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

export default function RapcultPackages() {
  const swiperRef = useRef<SwiperRef>(null);

  const onButtonLeftClick = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      const targetIndex = swiperInstance.activeIndex - 1;
      swiperInstance.slideTo(targetIndex);
    }
  };
  const onButtonRightClick = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      const targetIndex = swiperInstance.activeIndex + 1;
      swiperInstance.slideTo(targetIndex);
    }
  };

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
                <FaRegArrowAltCircleRight
                  color="red"
                  size="24px"
                  className="absolute right-2 top-2.5 bg-white rounded-full shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-full">
          <FaRegArrowAltCircleLeft
            size="32px"
            className="bg-white text-[#282c2c] rounded-full shadow-sm hover:shadow-lg border-2 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-grey-400 duration-300"
            onClick={onButtonLeftClick}
          />
          <div className="flex gap-x-6 py-4 overflow-x-scroll no-scrollbar w-2/3">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              freeMode={true}
              spaceBetween={30}
              centeredSlides={true}
              initialSlide={1}
              slidesPerView={3}
            >
              {Array.from({ length: 10 }, (_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <PackageItem packageNumber={index + 1} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <FaRegArrowAltCircleRight
            size="32px"
            className="bg-white text-[#282c2c] rounded-full shadow-sm hover:shadow-lg cursor-pointer border-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-grey-400 duration-300"
            onClick={onButtonRightClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
