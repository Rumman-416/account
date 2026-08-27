"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Button from "../layout/Button";

const HeroSection = () => {
  const containerRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(imageRef1.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
    })
      .from(
        imageRef2.current,
        { scale: 1.3, opacity: 0, duration: 1.2 },
        "-=1"
      )
      .from(
        imageRef3.current,
        { scale: 1.2, opacity: 0, duration: 1.2 },
        "-=1"
      );
  }, []);

  const lineReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: (i) => ({
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1,
        delay: 0.6 + i * 0.15,
        ease: [0.77, 0, 0.175, 1],
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2 + i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 z-0" />

      {/* Decorative floating images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          ref={imageRef1}
          style={{ y: imageY1 }}
          className="absolute -top-[5%] -right-[5%] lg:right-[5vw] lg:top-[5vw] w-[40vw] h-[30vw] lg:w-[25vw] lg:h-[20vw] rounded-3xl overflow-hidden opacity-20 rotate-[5deg]"
        >
          <Image
            fill
            src="/images/home/overview/1.jpg"
            className="object-cover"
            alt=""
            sizes="(max-width: 1024px) 40vw, 25vw"
          />
        </motion.div>

        <motion.div
          ref={imageRef2}
          style={{ y: imageY2 }}
          className="absolute bottom-[10%] -left-[5%] lg:left-[3vw] lg:bottom-[8vw] w-[35vw] h-[25vw] lg:w-[20vw] lg:h-[18vw] rounded-3xl overflow-hidden opacity-15 -rotate-[3deg]"
        >
          <Image
            fill
            src="/images/home/overview/3.jpg"
            className="object-cover"
            alt=""
            sizes="(max-width: 1024px) 35vw, 20vw"
          />
        </motion.div>

        <motion.div
          ref={imageRef3}
          style={{ y: imageY3 }}
          className="hidden lg:block absolute top-[20%] left-[12vw] w-[15vw] h-[12vw] rounded-3xl overflow-hidden opacity-10 rotate-[8deg]"
        >
          <Image
            fill
            src="/images/home/overview/2.jpg"
            className="object-cover"
            alt=""
            sizes="15vw"
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[15%] left-[10%] w-[1px] h-[20vw] bg-gradient-to-b from-brand-500/30 to-transparent" />
      <div className="absolute bottom-[15%] right-[10%] w-[1px] h-[15vw] bg-gradient-to-t from-brand-500/20 to-transparent" />

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity }}
        /* The header is fixed and the scroll cue is pinned to the bottom, so the
             centred content reserves room for both instead of sliding under them. */
          className="relative z-10 h-full flex flex-col justify-center items-center px-5 pt-24 lg:pt-[5.5vw] pb-24 lg:pb-[7vw]"
      >
        {/* Tagline */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 lg:mb-[2vw]"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 lg:px-[1vw] lg:py-[0.4vw] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs lg:text-[0.75vw] text-white/60 font-light uppercase tracking-[0.15em]">
              Tax Consultancy • Kalyan, Maharashtra
            </span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="text-center max-w-[90vw] lg:max-w-[70vw]">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={lineReveal}
            className="heading-xl text-white mb-2"
          >
            Expert Tax
          </motion.h1>
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={lineReveal}
            className="heading-xl gradient-text mb-2"
          >
            Solutions
          </motion.h1>
          <motion.h1
            custom={3}
            initial="hidden"
            animate="visible"
            variants={lineReveal}
            className="heading-xl text-white"
          >
            For Your Business
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="content-lg text-white/50 text-center max-w-[85vw] lg:max-w-[40vw] mt-6 lg:mt-[2vw] font-light"
        >
          Simplifying GST, income tax, audits & compliance so you can focus on
          growing your business.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 lg:mt-[2.5vw]"
        >
          <Link href="/services">
            <Button text="Explore Services" />
          </Link>
          <Link href="/contact-us">
            <Button text="Book Consultation" white />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 lg:bottom-[3vw] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] lg:text-[0.6vw] text-white/30 uppercase tracking-[0.2em] font-light">
          Scroll
        </span>
        <div className="w-[1px] h-8 lg:h-[3vw] bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-brand-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
