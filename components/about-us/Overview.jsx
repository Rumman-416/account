import Image from "next/image";
import React from "react";
import Button from "../layout/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp, staggerContainer } from "../Animation/Variants";

const Overview = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      title: "Expert Knowledge",
      desc: "Deep understanding of Indian taxation laws and compliance requirements.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: "Data Security",
      desc: "Your financial data is handled with utmost confidentiality and security.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Client Focus",
      desc: "Personalized service tailored to your specific business needs.",
    },
  ];

  return (
    <section className="containerx containery overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-[4vw]">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight(0.2)}
          className="lg:w-[45%] w-full mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="aspect-[3/4] lg:aspect-[4/5]">
              <Image
                fill
                src="/images/home/h1.webp"
                alt="About Samim Consultancy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 lg:bottom-[1.5vw] lg:left-[1.5vw] p-4 lg:p-[1.2vw] bg-dark-900/80 backdrop-blur-xl rounded-xl border border-white/[0.06]">
              <p className="text-brand-500 text-2xl lg:text-[2vw] font-bold">12+</p>
              <p className="text-white/60 text-xs lg:text-[0.7vw]">Years of Trust</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft(0.3)}
          className="lg:w-[50%] w-full flex flex-col justify-center"
        >
          <span className="subheading mb-3 lg:mb-[0.8vw]">About Us</span>
          <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">
            Your Trusted Partner in
            <span className="text-brand-500"> Tax Compliance</span>
          </h2>
          <p className="content text-white/50 mb-3">
            Samim Consultancy is a premier tax consultancy firm based in Kalyan,
            Maharashtra. We specialize in providing comprehensive taxation,
            compliance, and business advisory services to individuals, startups,
            and established businesses.
          </p>
          <p className="content text-white/50 mb-6 lg:mb-[2vw]">
            Our team of experienced professionals is committed to simplifying the
            complex world of taxation and regulatory compliance, ensuring your
            business stays compliant while you focus on growth.
          </p>

          {/* Highlights */}
          <div className="space-y-4 lg:space-y-[1.2vw] mb-8 lg:mb-[2.5vw]">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 lg:gap-[1vw] group"
              >
                <div className="flex-shrink-0 w-10 h-10 lg:w-[2.5vw] lg:h-[2.5vw] bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white text-sm lg:text-[1vw] font-medium mb-0.5">
                    {item.title}
                  </h4>
                  <p className="content-xs text-white/40">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <Link href="/contact-us">
              <Button text="Contact Us" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
