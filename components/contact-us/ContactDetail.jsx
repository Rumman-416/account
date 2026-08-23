import React from "react";
import { motion } from "framer-motion";
import Button from "../layout/Button";
import EnquireForm from "./EnquireForm";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "../Animation/Variants";

const ContactDetail = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: "Location",
      value: "Kalyan, Maharashtra, India",
    },
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: (
        <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: "info@samimconsultancy.com",
    },
  ];

  return (
    <section className="containerx containery">
      <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-[4vw] gap-8">
        {/* Map + Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInLeft(0.2)}
          className="w-full lg:w-[48%]"
        >
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.06] mb-6 lg:mb-[2vw]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.015997011007!2d73.123896875803!3d19.23813458200016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be794259ee051b3%3A0x19aa543786f4db3b!2sSamim%20Consultancy!5e0!3m2!1sen!2sin!4v1750615950334!5m2!1sen!2sin"
              className="w-full h-[25rem] md:h-[22rem] lg:h-[25vw]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-[0.8vw]">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="card-glass p-4 lg:p-[1.2vw] text-center"
              >
                <div className="w-10 h-10 lg:w-[2.5vw] lg:h-[2.5vw] bg-brand-500/10 rounded-full flex items-center justify-center text-brand-500 mx-auto mb-2 lg:mb-[0.5vw]">
                  {item.icon}
                </div>
                <p className="text-white/30 text-[10px] lg:text-[0.65vw] uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white text-xs lg:text-[0.75vw] font-medium">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInRight(0.3)}
          className="w-full lg:w-[48%]"
        >
          <div className="card-glass p-6 lg:p-[2vw]">
            <h3 className="heading-md text-white mb-2">Get in Touch</h3>
            <p className="content-sm text-white/40 mb-6 lg:mb-[2vw]">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
            <EnquireForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetail;
