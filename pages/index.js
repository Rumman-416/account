import Experience from "@/components/home/Experience";
import HomeBanner from "@/components/home/HomeBanner";
import Overview from "@/components/home/Overview";
import Services from "@/components/home/Services";
import React from "react";

const index = () => {
  return (
    <>
      <HomeBanner />
      <Overview />
      <Services />
      <Experience />
    </>
  );
};

export default index;
