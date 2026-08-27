import Banner from "@/components/reusableComponent/Banner";
import ServicesList from "@/components/services/ServicesList";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
  const data = {
    img: "/images/banner/abt.jpg",
    title: "Our Services",
  };
  return (
    <>
      <Banner
        data={data}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="containerx pt-12 lg:pt-[4vw] pb-8 lg:pb-[2.5vw]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content text-white/50 text-center max-w-[38ch] lg:max-w-[60ch] mx-auto"
        >
          Comprehensive tax, compliance and business advisory services tailored
          to your needs.
        </motion.p>
      </div>
      <ServicesList />
    </>
  );
};

export default index;
