import React from "react";
import { motion } from "framer-motion";
import EnquireForm from "./EnquireForm";
import contact from "../data/contact";
import { slideInLeft, slideInRight } from "../Animation/Variants";

const MapPin = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const Phone = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const Mail = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ContactDetail = () => {
  // Every one of these is actionable - the old page printed the phone number
  // and email as plain text, so on a phone you couldn't tap either.
  const methods = [
    {
      icon: MapPin,
      label: "Visit us",
      value: contact.addressLines.join(", "),
      href: contact.mapsLink,
      external: true,
      cta: "Open in Maps",
    },
    {
      icon: Phone,
      label: "Call us",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
      cta: "Tap to call",
    },
    {
      icon: Mail,
      label: "Email us",
      value: contact.emailDisplay,
      href: contact.emailHref,
      cta: "Send an email",
    },
  ];

  return (
    <section className="containerx containery">
      <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-[4vw] gap-8">
        {/* Left - reachable details + map */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInLeft(0.2)}
          className="w-full lg:w-[48%]"
        >
          <span className="subheading block mb-3">Reach us</span>
          <h2 className="heading-md text-white mb-6 lg:mb-[1.8vw]">
            Let&apos;s start a conversation
          </h2>

          <ul className="space-y-3 lg:space-y-[0.8vw] mb-6 lg:mb-[2vw]">
            {methods.map(({ icon: Icon, ...item }) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 lg:gap-[1vw]
                    rounded-2xl border border-white/[0.08]
                    bg-gradient-to-b from-white/[0.05] to-white/[0.02]
                    p-4 lg:p-[1.2vw]
                    transition-all duration-400
                    hover:border-brand-500/40 hover:from-white/[0.08]"
                >
                  <span className="shrink-0 w-11 h-11 lg:w-[2.6vw] lg:h-[2.6vw] rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-400">
                    <Icon className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw]" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-white/30 text-[10px] lg:text-[0.65vw] uppercase tracking-[0.15em] mb-1">
                      {item.label}
                    </span>
                    <span className="block text-white text-sm lg:text-[0.9vw] font-medium leading-relaxed">
                      {item.value}
                    </span>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 text-brand-500 text-xs lg:text-[0.72vw] font-medium">
                      {item.cta}
                      <svg
                        className="w-3 h-3 lg:w-[0.75vw] lg:h-[0.75vw] transition-transform duration-400 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            <iframe
              title="Samim Consultancy location"
              src={contact.mapEmbed}
              className="w-full h-[18rem] lg:h-[18vw] block"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Right - form */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideInRight(0.3)}
          className="w-full lg:w-[48%] lg:sticky lg:top-28"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 lg:p-[2vw]">
            <h3 className="heading-md text-white mb-2">Send an enquiry</h3>
            <p className="content-sm text-white/40 mb-6 lg:mb-[2vw]">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>
            <EnquireForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactDetail;
