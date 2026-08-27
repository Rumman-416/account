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
      <Banner
        data={data}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <ContactDetail />
    </>
  );
};

export default contactUs;
