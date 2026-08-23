import ContactDetail from "@/components/contact-us/ContactDetail";
import Banner from "@/components/reusableComponent/Banner";
import React from "react";

const contactUs = () => {
  const data = {
    img: "/images/banner/abt.jpg",
    title: "Contact Us",
  };
  return (
    <>
      <Banner data={data} />
      <ContactDetail />
    </>
  );
};

export default contactUs;
