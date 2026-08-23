import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";
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
      <section className="containerx containery text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">
            Ready to Simplify Your <span className="text-brand-500">Taxes</span>?
          </h2>
          <p className="content text-white/50 max-w-[50vw] mx-auto mb-6 lg:mb-[2vw]">
            Let our expert team handle your tax compliance while you focus on what matters most — growing your business.
          </p>
          <a href="/contact-us" className="btn-primary">
            Schedule a Free Consultation
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default index;
