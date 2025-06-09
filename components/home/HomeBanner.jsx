import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import { useRef, useState } from "react";
import Image from "next/image";

const HomeBanner = () => {
  const [isBeginning, setIsBeginning] = useState(true); // Track if at the first slide
  const [isEnd, setIsEnd] = useState(false); // Track if at the last slide

  const swiperRef = useRef(null);
  const list = [
    {
      img: "/images/home/h1.webp",
      title: "An Unconventional Path In World Of Real-Estate",
      content:
        "Lorem ipsum dolor sit amet consectetur. Egestas vel pulvinar lobortis",
    },
    {
      img: "/images/home/h1.webp",
      title: "An Unconventional Path In World Of Real-Estate",
      content:
        "Lorem ipsum dolor sit amet consectetur. Egestas vel pulvinar lobortis",
    },
    {
      img: "/images/home/h1.webp",
      title: "An Unconventional Path In World Of Real-Estate",
      content:
        "Lorem ipsum dolor sit amet consectetur. Egestas vel pulvinar lobortis",
    },
  ];
  return (
    <div className=" ">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Save swiper instance
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        cssMode={false} // Disable CSS mode for draggable functionality
        grabCursor={true} // Enables dragging with the cursor
        keyboard={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false, // Allows autoplay to continue after interaction
        }}
        modules={[Navigation, Pagination, Keyboard, Autoplay, Thumbs]}
        className=""
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-screen w-full relative">
              <div className=" bg-gradient-to-t  from-black to-transparent absolute size-full z-[1]"></div>
              <Image
                height={1000}
                width={1000}
                src={item.img}
                className=" size-full absolute "
              />
              <div className="h-full container y_container mx-auto text-white">
                <div className="relative z-[1] h-full lg:w-[65%] flex flex-col justify-end items-start left-0">
                  <h4 className="heading ">{item.title}</h4>
                  <p className="content  font-montserrat py-[2.083vw]">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
