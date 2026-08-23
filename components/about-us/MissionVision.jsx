import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MissionVision = () => {
  const data = [
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[2.5vw] lg:h-[2.5vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Vision",
      desc: "To be the most trusted and respected tax consultancy firm in Maharashtra, empowering businesses with clarity and confidence in their financial compliance journey.",
    },
    {
      icon: (
        <svg className="w-8 h-8 lg:w-[2.5vw] lg:h-[2.5vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
      ),
      title: "Our Mission",
      desc: "To deliver accurate, timely, and personalized tax solutions that simplify compliance and drive business growth. We are committed to building lasting relationships through trust, transparency, and excellence.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Section Header */}
      <div className="containerx pt-16 lg:pt-[6vw] pb-8 lg:pb-[3vw] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="subheading block mb-3">Our Purpose</span>
          <h2 className="heading text-white">
            Mission & <span className="text-brand-500">Vision</span>
          </h2>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="containerx relative z-10 pb-16 lg:pb-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[1.5vw]">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden p-6 lg:p-[2.5vw] bg-dark-800/30 border border-white/[0.06] hover:border-brand-500/20 transition-all duration-500 h-full">
                {/* Accent gradient */}
                <div className={`absolute top-0 ${index === 0 ? "left-0" : "right-0"} w-1/2 h-full bg-gradient-to-${index === 0 ? "r" : "l"} from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 lg:w-[4vw] lg:h-[4vw] bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-5 lg:mb-[1.5vw] group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-xl lg:text-[1.5vw] font-semibold text-white mb-3 lg:mb-[1vw]">
                    {item.title}
                  </h3>
                  <p className="content text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
