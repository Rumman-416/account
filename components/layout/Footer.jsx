import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../Animation/Variants";

const Footer = () => {
  const services = [
    { name: "Registration", link: "/services/registration" },
    { name: "Taxation", link: "/services/taxation" },
    { name: "Certification", link: "/services/certification" },
    { name: "Audit", link: "/services/audit" },
    { name: "Other Services", link: "/services/other-services" },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const social = [
    { img: "/icons/facebook.svg", link: "#", label: "Facebook" },
    { img: "/icons/insta.svg", link: "#", label: "Instagram" },
    { img: "/icons/linkedin.svg", link: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.04]">
      {/* Main Footer */}
      <div className="containerx pt-14 lg:pt-[5vw] pb-8 lg:pb-[3vw]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[3vw]"
        >
          {/* Brand */}
          <motion.div variants={fadeUp(0)} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 lg:gap-[0.6vw] mb-5 lg:mb-[1.5vw]">
              <div className="w-9 h-9 lg:w-[2.5vw] lg:h-[2.5vw] bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm lg:text-[1vw]">S</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm lg:text-[1vw] leading-tight">
                  Samim
                </p>
                <p className="text-white/40 text-[9px] lg:text-[0.55vw] font-light uppercase tracking-[0.2em]">
                  Consultancy
                </p>
              </div>
            </Link>
            <p className="content-xs text-white/40 leading-relaxed max-w-[90vw] md:max-w-[20vw] lg:max-w-[16vw]">
              Your trusted partner for taxation, compliance, and business
              advisory services in Kalyan, Maharashtra.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp(0.1)}>
            <h4 className="text-white text-xs lg:text-[0.75vw] font-semibold uppercase tracking-[0.15em] mb-4 lg:mb-[1.2vw]">
              Services
            </h4>
            <ul className="space-y-2.5 lg:space-y-[0.7vw]">
              {services.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="text-white/40 text-xs lg:text-[0.8vw] font-light hover:text-brand-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp(0.2)}>
            <h4 className="text-white text-xs lg:text-[0.75vw] font-semibold uppercase tracking-[0.15em] mb-4 lg:mb-[1.2vw]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 lg:space-y-[0.7vw]">
              {quickLinks.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="text-white/40 text-xs lg:text-[0.8vw] font-light hover:text-brand-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp(0.3)}>
            <h4 className="text-white text-xs lg:text-[0.75vw] font-semibold uppercase tracking-[0.15em] mb-4 lg:mb-[1.2vw]">
              Contact
            </h4>
            <div className="space-y-3 lg:space-y-[0.8vw]">
              <p className="content-xs text-white/40">
                Kalyan, Maharashtra, India
              </p>
              <a
                href="mailto:info@samimconsultancy.com"
                className="block content-xs text-white/40 hover:text-brand-500 transition-colors"
              >
                info@samimconsultancy.com
              </a>
              <a
                href="tel:+919876543210"
                className="block content-xs text-white/40 hover:text-brand-500 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="containerx border-t border-white/[0.04] py-5 lg:py-[1.2vw]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="content-xs text-white/30">
            © {new Date().getFullYear()} Samim Consultancy. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-[2vw] lg:h-[2vw] rounded-full border border-white/10 flex items-center justify-center hover:border-brand-500/40 hover:bg-brand-500/10 transition-all duration-300"
                aria-label={item.label}
              >
                <Image
                  width={14}
                  height={14}
                  src={item.img}
                  alt={item.label}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
