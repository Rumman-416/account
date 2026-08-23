import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../layout/Button";

const ServicesDetail = ({ data }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (idx) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="containerx containery">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-[3vw]">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[42%] lg:sticky lg:top-24"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
            <Image
              fill
              src={data?.image}
              alt={data?.name}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent" />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-[53%]"
        >
          <span className="subheading mb-3 lg:mb-[0.8vw] block">
            Our Service
          </span>
          <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">
            {data?.name}
          </h2>
          <p className="content text-white/50 mb-8 lg:mb-[2.5vw]">
            {data?.description}
          </p>

          {/* Sub-services accordion */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            {data?.subServices?.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div
                  key={index}
                  className="border-b border-white/[0.04] last:border-b-0"
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleItem(index)}
                    className={`w-full py-4 lg:py-[1vw] px-5 lg:px-[1.5vw] flex justify-between items-center text-left transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-500/10"
                        : "bg-dark-800/30 hover:bg-dark-800/50"
                    }`}
                  >
                    <h4
                      className={`text-sm lg:text-[0.9vw] font-medium transition-colors ${
                        isOpen ? "text-brand-500" : "text-white/80"
                      }`}
                    >
                      {item?.name}
                    </h4>
                    <div
                      className={`flex-shrink-0 w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw] rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-brand-500 rotate-180"
                          : "border-white/10"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 transition-colors ${
                          isOpen ? "text-brand-500" : "text-white/40"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 lg:px-[1.5vw] pb-4 lg:pb-[1vw] pt-2 bg-dark-800/20">
                          <p className="content-sm text-white/40 mb-3">
                            {item?.data}
                          </p>
                          <Button text="Enquire Now" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetail;
