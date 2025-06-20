"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../layout/Button";

const Card = ({ index, item, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <>
      <div
        key={index}
        ref={container}
        className=" h-screen flex justify-center items-center sticky top-0 text-primary "
      >
        <motion.div
          style={{ scale, top: `calc(0% + ${index * 25}px)` }}
          className={`sm:w-10/12  lg:w-9/12 mx-auto border  bg-secondary rounded-box relative shadow-2xl`}
        >
          <h5 className=" heading  text-center mb-8">{item.title}</h5>
          <div className=" flex flex-col md:flex-row justify-between items-start gap-5 w-full">
            <div className="md:w-[40%]">
              <p className="  ">{item.Content}</p>
              <div className=" mt-8">
                <Button text={"Know More"} white={false} />
              </div>
            </div>
            <div className="h-[13rem] lg:h-[19vw] w-full md:w-[60%]  rounded-xl overflow-hidden">
              <motion.div style={{ scale: imageScale }} className=" size-full">
                <Image
                  height={1000}
                  width={1000}
                  src={item.img}
                  className={`size-full object-cover  `}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
