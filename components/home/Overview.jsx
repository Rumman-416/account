import Image from "next/image";
import React from "react";

const Overview = () => {
  // const data = [
  //     {
  //         img:
  //     }
  // ]
  return (
    <div className=" relative">
      <div className=" hidden md:block absolute z-[-1]  md:p-16 ">
        <div className=" md:rotate-[-10deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#036] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5">
          <Image
            height={1000}
            width={1000}
            src={"/images/home/overview/1.jpg"}
            className=" size-full object-cover absolute rounded-lg"
          />
        </div>
      </div>
      <div className=" hidden md:block absolute md:p-16 z-[-1] bottom-0 right-0">
        <div className=" md:rotate-[6deg] rounded-lg relative h-[8rem] w-[16rem] lg:h-[12vw] lg:w-[20vw] after:size-full after:bg-[#036] after:rounded-lg after:absolute after:z-[-1] after:-right-5 after:-bottom-5">
          <Image
            height={1000}
            width={1000}
            src={"/images/home/overview/3.jpg"}
            className=" size-full object-cover absolute rounded-lg"
          />
        </div>
      </div>
      <div className=" container y_container mx-auto text-color md:h-screen flex flex-col justify-center items-center gap-5">
        <h5 className="lg:text-[5vw] lg:leading-[10rem] text-3xl uppercase text-color-header text-center">
          All services under one roof
        </h5>
        <button className=" border-[#036] border-2 overflow-hidden px-5 py-2 lg:px-[1.35vw] lg:py-[0.6vw] rounded-3xl relative after:absolute hover:after:bg-[#036] after:h-full after:z-[-1] after:w-0 hover:after:w-full after:left-0 after:top-0  after:transition-all duration-200 text-[#036] hover:text-white">
          <span className="font-medium ">Enquire now</span>
        </button>
      </div>
    </div>
  );
};

export default Overview;
