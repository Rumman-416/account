import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
  const data = [
    {
      img: "/images/home/h1.webp",
      name: "GST Registration",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi?",
    },
    {
      img: "/images/home/h1.webp",
      name: "GST Registration",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi?",
    },
    {
      img: "/images/home/h1.webp",
      name: "GST Registration",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi?",
    },
    {
      img: "/images/home/h1.webp",
      name: "GST Registration",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi?",
    },
    {
      img: "/images/home/h1.webp",
      name: "GST Registration",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea unde neque commodi?",
    },
  ];
  return (
    <div className=" containerx containery">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[2vw] gap-y-[3.5vw]">
        {data?.map((item, index) => (
          <ServicesCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
