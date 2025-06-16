"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const animate = useRef([]);

  useGSAP(() => {
    gsap.from(animate.current, {
      scale: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="containerx relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute sm:left-5 top-[8.5vw] lg:left-[4vw]">
        <div
          ref={(el) => (animate.current[0] = el)}
          className="md:rotate-[-10deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#1E3C3E] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5 lg:after:right-[-1.5vw] lg:after:bottom-[-1.5vw]"
        >
          <Image
            height={150}
            width={250}
            src="/images/home/overview/1.jpg"
            className="size-full object-cover absolute rounded-lg"
            alt="overview-1"
          />
        </div>
      </div>

      <div className="absolute sm:right-10 bottom-[8.5vw] lg:right-[4vw]">
        <div
          ref={(el) => (animate.current[1] = el)}
          className="md:rotate-[10deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#1E3C3E] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5 lg:after:right-[-1.5vw] lg:after:bottom-[-1.5vw]"
        >
          <Image
            height={150}
            width={250}
            src="/images/home/overview/3.jpg"
            className="size-full object-cover absolute rounded-lg"
            alt="overview-3"
          />
        </div>
      </div>

      <h6
        ref={(el) => (animate.current[2] = el)}
        className="text-3xl lg:text-[4vw] lg:leading-normal text-primary text-center uppercase lg:w-[60%]"
      >
        All Services under one roof
      </h6>
    </div>
  );
};

export default HeroSection;
