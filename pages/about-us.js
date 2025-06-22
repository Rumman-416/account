import MissionVision from "@/components/about-us/MissionVision";
import Overview from "@/components/about-us/Overview";
import Banner from "@/components/reusableComponent/Banner";
import React from "react";

const aboutUs = () => {
  const data = {
    img: "/images/banner/abt.jpg",
    title: "about us",
  };
  return (
    <div>
      <Banner data={data} />
      <Overview />
      <MissionVision />
    </div>
  );
};

export default aboutUs;
