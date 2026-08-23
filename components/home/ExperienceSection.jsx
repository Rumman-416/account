import Image from "next/image";
import React from "react";
import Counter from "../reusableComponent/counter";
import Button from "../layout/Button";
import { fadeUp, slideInLeft, slideInRight } from "../Animation/Variants";
import { motion } from "framer-motion";
import Link from "next/link";

const ExperienceSection = () => {
  const stats = [
    { count: "12", suffix: "+", desc: "Years of Excellence" },
    { count: "102", suffix: "+", desc: "Clients Served" },
    { count: "4.5", suffix: "", desc: "JustDial Rating" },
  ];

  const features = [
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost-Effective",
      desc: "Transparent pricing with no hidden charges. Quality service at competitive rates.",
    },
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Trusted & Certified",
      desc: "Experienced professionals with a proven track record in regulatory compliance.",
    },
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Fast Turnaround",
      desc: "Swift processing of filings, registrations and compliance documents.",
    },
  ];

  return (
    <section className="containerx containery overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 lg:gap-[3vw]">
        {/* Left Column - Image + Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight(0.2)}
          className="lg:w-[48%] w-full"
        >
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="aspect-[4/3] lg:aspect-[16/11]">
              <Image
                fill
                src="/images/home/overview/2.jpg"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Financial planning"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 lg:bottom-[1.5vw] lg:left-[1.5vw] px-4 py-2 lg:px-[1vw] lg:py-[0.5vw] bg-brand-500 rounded-xl">
              <p className="text-white text-xs lg:text-[0.8vw] font-medium">
                12+ Years of Trust
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-3 gap-3 lg:gap-[0.8vw]">
            {stats.map((item, index) => (
              <div
                key={index}
                className="card-glass p-4 lg:p-[1.2vw] text-center"
              >
                <Counter
                  start={0}
                  end={item.count}
                  duration={2500}
                  suffix={item.suffix}
                />
                <p className="content-xs text-white/50 mt-1 lg:mt-[0.3vw]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft(0.3)}
          className="lg:w-[52%] w-full flex flex-col justify-center"
        >
          <span className="subheading mb-3 lg:mb-[0.8vw]">Why Choose Us</span>
          <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">
            Trusted by businesses across
            <span className="text-brand-500"> Maharashtra</span>
          </h2>
          <p className="content text-white/50 mb-6 lg:mb-[2vw] max-w-[90vw] lg:max-w-[38vw]">
            With over a decade of experience in taxation, compliance, and
            business advisory, Samim Consultancy is your reliable partner for
            all financial and regulatory needs.
          </p>

          {/* Features */}
          <div className="space-y-4 lg:space-y-[1.2vw] mb-8 lg:mb-[2.5vw]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 lg:gap-[1vw] group"
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-[2.8vw] lg:h-[2.8vw] bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white text-sm lg:text-[1vw] font-medium mb-1">
                    {feature.title}
                  </h4>
                  <p className="content-xs text-white/40">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <Link href="/about-us">
              <Button text="Learn More About Us" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
