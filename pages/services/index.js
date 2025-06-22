import Banner from "@/components/reusableComponent/Banner";
import ServicesList from "@/components/services/ServicesList";
import React from "react";

const index = () => {
  const data = {
    img: "/images/banner/abt.jpg",
    title: "Our Services ",
  };
  return (
    <>
      <Banner data={data} />
      <ServicesList />
    </>
  );
};

export default index;
