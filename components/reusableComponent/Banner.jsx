import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Banner = ({ data }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[55vw] overflow-hidden">
      {/* Background Image */}
      <Image
        fill
        src={data?.img}
        className="object-cover object-center"
        alt={data?.title}
        sizes="100vw"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/30" />
      <div className="absolute inset-0 bg-dark-950/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end containerx pb-12 lg:pb-[5vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-3 py-1.5 lg:px-[0.8vw] lg:py-[0.3vw] rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-sm text-[10px] lg:text-[0.65vw] text-white/60 uppercase tracking-[0.15em] mb-4 lg:mb-[1vw]">
            Samim Consultancy
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-[4vw] font-semibold text-white leading-[1.1] tracking-[-0.02em] capitalize">
            {data?.title}
          </h1>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </div>
  );
};

export default Banner;
