import React from "react";
import { motion } from "framer-motion";
import data from "../data/services";
import Image from "next/image";
import Link from "next/link";
import Button from "../layout/Button";
import { fadeUp, staggerContainer } from "../Animation/Variants";

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Section header */}
      <div className="containerx pt-8 lg:pt-[3vw]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.15)}
          className="text-center mb-10 lg:mb-[4vw]"
        >
          <motion.span variants={fadeUp(0)} className="subheading block mb-3">
            What We Offer
          </motion.span>
          <motion.h2 variants={fadeUp(0.1)} className="heading text-white">
            Our <span className="text-brand-500">Services</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="containerx">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[1vw]"
        >
          {data.map((item, index) => (
            <motion.div
              key={item.slug}
              variants={fadeUp(index * 0.1)}
            >
              <Link href={`/services/${item.slug}`} className="block group">
                <div className="relative rounded-2xl overflow-hidden bg-dark-800/50 border border-white/[0.06] hover:border-brand-500/30 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      fill
                      src={item.image}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={item.name}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-[1.2vw]">
                    <h3 className="text-white text-base lg:text-[1.1vw] font-semibold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-xs lg:text-[0.7vw] font-light line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-500 text-xs lg:text-[0.7vw] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span>Learn More</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="containerx mt-10 lg:mt-[4vw] text-center"
      >
        <Link href="/services">
          <Button text="View All Services" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Services;
