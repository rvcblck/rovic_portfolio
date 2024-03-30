import Image from "next/image";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/virtual"; // Import Swiper virtual styles
import "swiper/modules"; // Import Swiper modules
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectList from "../../../public/projects";
import "./style.scss";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination]);

interface Props {
  id: number;
  title: string;
  description: string;
  images: { img: string }[];
}

export default function SwiperComponent({ selectedData }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
    console.log("Slide changed to: ", swiper.realIndex);
    // You can perform any action based on the current slide index
  };

  return (
    <div className="h-full w-full relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-full"
        onSlideChange={handleSlideChange}
      >
        {selectedData.images ? ( // Check if selectedData array has elements
          selectedData.images.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="slider-image-container relative">
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
      <div className="swiper-indicator absolute p-2 botttom-0 left-0 right-0 z-50 flex flex-row justify-center gap-2 text-sm">
        {/* loop selectedData.images */}

        {selectedData.images &&
          selectedData.images.map((image: any, index: any) => (
            <i
              key={index}
              className={`fa-solid fa-circle ${
                index === activeIndex ? "fc-primary" : "fc-secondary"
              }`}
            ></i>
          ))}
      </div>
    </div>
  );
}
