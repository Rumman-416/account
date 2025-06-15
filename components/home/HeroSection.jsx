import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" containerx relative h-screen flex justify-center items-center overflow-hidden">
      <div className=" absolute left-0 top-[8.5vw] lg:left-[4vw]">
        <div className=" md:rotate-[-10deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#1E3C3E] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5 lg:after:right-[-1.5vw] lg:after:bottom-[-1.5vw]">
          <Image
            height={150}
            width={250}
            src={"/images/home/overview/1.jpg"}
            className=" size-full object-cover absolute rounded-lg"
          />
        </div>
      </div>
      <div className=" absolute right-0 bottom-[8.5vw] lg:right-[4vw]">
        <div className=" md:rotate-[10deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#1E3C3E] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5 lg:after:right-[-1.5vw] lg:after:bottom-[-1.5vw]">
          <Image
            height={150}
            width={250}
            src={"/images/home/overview/3.jpg"}
            className=" size-full object-cover absolute rounded-lg"
          />
        </div>
      </div>
      <h6 className=" text-[4vw] text-primary text-center uppercase lg:w-[60%]">
        All Services under one roof
      </h6>
    </div>
  );
};

export default HeroSection;
