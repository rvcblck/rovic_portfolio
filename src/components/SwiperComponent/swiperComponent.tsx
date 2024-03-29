import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/virtual"; // Import Swiper virtual styles
import "swiper/modules"; // Import Swiper modules
import projectList from "../../../public/projects";
import "./style.scss";

interface Props {
  id: number;
  title: string;
  description: string;
  images: { img: string }[];
}

export default function SwiperComponent({ selectedData }: any) {
  return (
    <div className="h-full w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-full"
      >
        {selectedData.images ? ( // Check if selectedData array has elements
          selectedData.images.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="slider-image-container">
                <Image
                  src={`/rovic_portfolio/images/projects/${image.img}`}
                  alt="img"
                  width={1980}
                  height={1080}
                  priority
                  className="img-slide"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="no-selected">No items selected</div>
        )}
      </Swiper>
    </div>
  );
}
