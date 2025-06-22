import Image from "next/image";
import React from "react";

const Banner = ({ data }) => {
  return (
    <div className=" w-full h-[80vh] relative flex justify-center items-end">
      <Image
        height={1080}
        width={1920}
        src={data?.img}
        className=" absolute size-full object-cover -z-[1] grayscale"
      />
      <div className="bg-[#333] absolute size-full -z-[1] bg-opacity-55    " />
      <h6 className=" heading text-white my-40 capitalize">{data?.title}</h6>
    </div>
  );
};

export default Banner;
