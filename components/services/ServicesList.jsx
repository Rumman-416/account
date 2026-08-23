import React from "react";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import data from "../data/services";
import { fadeUp, staggerContainer } from "../Animation/Variants";

const ServicesList = () => {
  return (
    <section className="containerx containery">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[1.5vw]"
      >
        {data?.map((item, index) => (
          <motion.div key={index} variants={fadeUp(index * 0.1)}>
            <ServicesCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesList;
