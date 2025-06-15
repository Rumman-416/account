import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
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
import BannerHeading from "../ReusableComponent/BannerHeading";
import { cleanImage } from "@/services/imageHandling";

const HomeBanner = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Track current slide
  const list = [
    {
      img: "/images/homeBanner/image1.jpeg",
    },
    {
      img: "/images/homeBanner/image2.png",
    },
    {
      img: "/images/homeBanner/image3.png",
    },
    {
      img: "/images/homeBanner/image4.png",
    },
  ];
  const totalSlides = list.length;
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll by 100vh
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div className="min-h-[100dvh] relative">
      <div className="bg-black bg-opacity-35 size-full absolute z-[5]"></div>
      <div className="absolute flex flex-col justify-center items-center h-full w-full z-[6] heading-banner">
        <BannerHeading
          heading={data?.title?.split(" ").slice(0, 3).join(" ")}
          italic={data?.title
            ?.split(" ")
            .slice(3, data?.title.length)
            .join(" ")}
        />
        <p className="content-sm relative after:content:[''] after:absolute after:top-0 flex justify-center after:w-[6.25vw] after:h-[1px] after:bg-white pt-[0.417vw]">
          {data?.subtitle}
        </p>
      </div>
      <div className="absolute size-full overflow-hidden">
        <Swiper
          cssMode={false} // Disable CSS mode for draggable functionality
          grabCursor={true} // Enables dragging with the cursor
          keyboard={true}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false, // Allows autoplay to continue after interaction
          }}
          loop={true}
          onSlideChange={(swiper) =>
            setCurrentSlide((swiper.realIndex % totalSlides) + 1)
          }
          modules={[
            Navigation,
            Pagination,
            Keyboard,
            Autoplay,
            FreeMode,
            Thumbs,
          ]}
          className="banner-swiper"
        >
          {data?.bannerImages?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" ">
                <Image
                  height={1000}
                  width={1000}
                  className="w-full h-[100dvh] object-cover zoom-in-zoom-out relative "
                  src={cleanImage(item?.url)}
                  alt={"banner"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="  absolute md:pl-16 lg:pl-[6.667vw] w-full bottom-0 flex flex-col md:flex-row  justify-between items-center z-[6]">
        <div className="absolute bottom-3 md:left-[50%] flex justify-center items-center flex-col">
          <div
            className="border-2 px-2 py-4 rounded-2xl cursor-pointer"
            onClick={handleScroll} // Add onClick handler
          >
            <Image
              src="/images/scrollarrow.svg"
              width={1000}
              height={1000}
              alt="scroll down"
              className="h-auto w-[10px] animate-bounce"
            />
          </div>
          <p className="text-sm text-white">Scroll</p>
        </div>
        <div className="text-white w-[10.833vw] relative flex justify-center items-center after:content-[''] after:bg-white after:absolute after:w-[70%] after:h-[1px] text-[20px]">
          <div className=" md:flex hidden justify-between w-full items-center text-[1.042vw]">
            <p className="">{currentSlide.toString().padStart(2, "0")}</p>{" "}
            {/* Current slide */}
            <p>{totalSlides.toString().padStart(2, "0")}</p>{" "}
            {/* Total slides */}
          </div>
        </div>
        <div className=" hidden md:block md:w-[40%] 2xl:w-[35%]">
          <Swiper
            onSwiper={setThumbsSwiper}
            cssMode={false} // Disable CSS mode for draggable functionality
            grabCursor={true} // Enables dragging with the cursor
            keyboard={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false, // Allows autoplay to continue after interaction
            }}
            freeMode={true}
            watchSlidesProgress={true}
            loop={true}
            modules={[Autoplay, FreeMode, Thumbs]}
            className="mini-swiper"
          >
            {data?.bannerImages?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-[0.625vw] justify-center items-start my-8">
                  <Image
                    height={1000}
                    width={1000}
                    className="w-[12.502vw] h-[8.037vw] object-cover"
                    src={cleanImage(item?.url)}
                    alt={"banner"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
