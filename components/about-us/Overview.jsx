import Image from "next/image";
import React from "react";
import Button from "../layout/Button";
import { slideIn } from "../Animation/Variants";
import { motion } from "framer-motion";
const Overview = () => {
  return (
    <div className=" containerx containery flex max-lg:flex-col justify-center items-start gap-5 lg:gap-[3vw] overflow-x-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("right", 0.3)}
        className="mx-auto text-center"
      >
        <Image
          height={750}
          width={750}
          alt="overview-img-abt"
          src={"/images/home/h1.webp"}
          className=" w-full h-[20rem] lg:h-[32vw]  lg:w-[35vw] object-cover rounded-xl"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={slideIn("left", 0.3)}
        className=" lg:w-1/2"
      >
        <h6 className=" heading text-primary mt-3 ">Overview</h6>
        <p className=" content my-5 lg:my-[2vw] text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum
          iste nulla nesciunt, enim quis molestiae culpa autem. Dolor qui odio
          aspernatur modi ut porro ea distinctio vitae reprehenderit sequi?
          Neque libero fugit labore voluptate?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic ipsum iste nulla nesciunt, enim quis
          molestiae culpa autem. Dolor qui odio aspernatur modi ut porro ea
          distinctio vitae reprehenderit sequi? Neque libero fugit labore
          voluptate?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum
          iste nulla nesciunt, enim quis molestiae culpa autem. Dolor qui odio
          aspernatur modi ut porro ea distinctio vitae reprehenderit sequi?
          Neque libero fugit labore voluptate?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic ipsum iste nulla nesciunt, enim quis
          molestiae culpa autem. Dolor qui odio aspernatur modi ut porro ea
          distinctio vitae reprehenderit sequi? Neque libero fugit labore
          voluptate?
        </p>
        <div>
          <Button text={"enquire now"} />
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
