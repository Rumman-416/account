import React from "react";
import { motion } from "framer-motion";
import data from "../data/services";
import Image from "next/image";
import Link from "next/link";
import Button from "../layout/Button";
import { fadeUp, staggerContainer } from "../Animation/Variants";

const Services = () => {
  return (
    <section className="relative overflow-hidden pb-16 lg:pb-[6vw]">
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

      {/* Services grid.
          Six columns so the five services lay out 2-up then 3-up. A plain
          4-column grid left the last card stranded on its own row. */}
      <div className="containerx">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-[1vw]"
        >
          {data.map((item, index) => {
            const featured = index < 2;
            return (
              <motion.div
                key={item.slug}
                variants={fadeUp(index * 0.08)}
                className={featured ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <Link href={`/services/${item.slug}`} className="group block h-full">
                  <article
                    className="relative h-full overflow-hidden rounded-2xl
                      border border-white/[0.08]
                      transition-all duration-500
                      hover:border-brand-500/40
                      hover:shadow-[0_18px_50px_-20px_rgba(245,104,58,0.45)]
                      hover:-translate-y-1"
                  >
                    <div
                      className={`relative ${
                        featured
                          ? "aspect-[16/11] lg:aspect-[16/9]"
                          : "aspect-[4/3] lg:aspect-[5/4]"
                      }`}
                    >
                      <Image
                        fill
                        src={item.image}
                        alt={item.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={
                          featured
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                        }
                      />
                      {/* Heavier scrim than before - the old one left the copy
                          barely readable over the busier photos. */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/75 to-dark-950/20" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-brand-600/25 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 lg:p-[1.4vw]">
                      <span
                        className="inline-flex items-center rounded-full
                          border border-white/15 bg-white/10 backdrop-blur-sm
                          px-2.5 py-1 lg:px-[0.7vw] lg:py-[0.25vw]
                          text-[10px] lg:text-[0.65vw] font-medium text-white/80
                          mb-3 lg:mb-[0.8vw]"
                      >
                        {item.subServices.length} services
                      </span>

                      <h3
                        className={`text-white font-semibold mb-1 ${
                          featured
                            ? "text-xl lg:text-[1.5vw]"
                            : "text-base lg:text-[1.1vw]"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <p className="text-white/50 text-xs lg:text-[0.75vw] font-light line-clamp-2">
                        {item.description}
                      </p>

                      {/* Always visible, so the card reads as clickable at rest */}
                      <div className="mt-3 lg:mt-[0.9vw] inline-flex items-center gap-2 text-brand-500 text-xs lg:text-[0.75vw] font-medium">
                        <span>Learn more</span>
                        <svg
                          className="w-3.5 h-3.5 lg:w-[0.9vw] lg:h-[0.9vw] transition-transform duration-500 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
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
