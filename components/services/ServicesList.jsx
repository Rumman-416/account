import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import data from "../data/services";
import { fadeUp, staggerContainer } from "../Animation/Variants";

const ServicesList = () => {
  return (
    <section className="containerx pb-16 lg:pb-[6vw]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[1.5vw] items-stretch"
      >
        {data?.map((item, index) => (
          <motion.div key={item.slug} variants={fadeUp(index * 0.08)} className="h-full">
            <ServicesCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesList;
