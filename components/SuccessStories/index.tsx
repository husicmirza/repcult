"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SuccessStoryItem from "./SuccessStoryItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function SuccessStories() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-y-6 py-10 text-white w-full">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-5xl font-bold uppercase text-center">
            Success stories
          </h1>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex gap-x-6 py-4 overflow-x-scroll no-scrollbar">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              freeMode={true}
              spaceBetween={30}
              centeredSlides={true}
              initialSlide={1}
              slidesPerView={2}
              // style={{
              //   "--swiper-pagination-color": "#fff",
              // }}
            >
              {Array.from({ length: 3 }, (_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SuccessStoryItem key={index + 1} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
