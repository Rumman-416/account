import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
import Button from "@/components/layout/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <HeroSection />

      {/* Divider */}
      <div className="hr-gradient" />

      <ExperienceSection />

      {/* Divider */}
      <div className="hr-gradient" />

      <Services />

      {/* Divider */}
      <div className="hr-gradient" />

      <Testimonial />

      {/* CTA Section */}
      <section className="containerx pb-16 lg:pb-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl
            border border-white/[0.08]
            bg-gradient-to-b from-white/[0.06] to-white/[0.02]
            px-6 py-14 lg:px-[4vw] lg:py-[4.5vw] text-center"
        >
          {/* Brand glow so the closing CTA reads as a destination, not more body copy */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[32vw] rounded-full bg-brand-500/[0.10] blur-[120px]" />

          <div className="relative">
            <span className="subheading block mb-3">Get started</span>
            <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">
              Ready to Simplify Your <span className="text-brand-500">Taxes</span>?
            </h2>
            {/* Was max-w-[50vw] - an ~800px unbroken measure */}
            <p className="content text-white/50 max-w-[36ch] lg:max-w-[58ch] mx-auto mb-8 lg:mb-[2.5vw]">
              Let our expert team handle your tax compliance while you focus on
              what matters most — growing your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-[1vw]">
              {/* Was a bare <a href>, which forced a full page reload and threw
                  away the client-side router and smooth-scroll state. */}
              <Link href="/contact-us">
                <Button text="Schedule a Free Consultation" />
              </Link>
              <Link href="/services">
                <Button text="Explore Services" white />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default index;
