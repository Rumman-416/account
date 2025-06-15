import React from "react";
import Image from "next/image";
import BannerHeading from "./BannerHeading";
import { cleanImage } from "@/services/imageHandling";

const Banner = ({ ...props }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll by 100vh
      behavior: "smooth", // Smooth scroll animation
    });
  };
  const underline =
    "after:content-[''] after:absolute after:top-0  after:w-[6.25vw] after:h-[1px] after:bg-white";

  return (
    <>
      <div className="h-[100dvh] relative">
        <div className="h-full w-full absolute overflow-hidden">
          <Image
            src={cleanImage(props?.img?.url)}
            width={1920}
            height={1080}
            alt="banner"
            className="h-full w-full object-cover zoom-in-zoom-out"
          />
        </div>
        <div className="relative h-full z-[1] size-full flex flex-col justify-center items-center heading-banner">
          <BannerHeading heading={props.heading} italic={props.italic} />
          <p className="content-sm relative flex justify-center  pt-[0.417vw] ">
            {props.text}
          </p>
          <div className="absolute bottom-3 flex justify-center items-center flex-col">
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
            <p className="text-sm">Scroll</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
