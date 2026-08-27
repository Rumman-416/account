import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Banner = ({ data, breadcrumbs }) => {
  return (
    /* Was h-[55vw] - 880px on a 1600px screen, so the title alone filled the
       viewport and the actual page content started below the fold. */
    <div className="relative w-full h-[45vh] min-h-[340px] lg:h-[26vw] lg:min-h-[380px] overflow-hidden">
      <Image
        fill
        src={data?.img}
        className="object-cover object-center"
        alt={data?.title}
        sizes="100vw"
        priority
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/40" />
      <div className="absolute inset-0 bg-dark-950/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end containerx pb-10 lg:pb-[3vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-3 py-1.5 lg:px-[0.8vw] lg:py-[0.3vw] rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-sm text-[10px] lg:text-[0.65vw] text-white/60 uppercase tracking-[0.15em] mb-4 lg:mb-[1vw]">
            Samim Consultancy
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-[3.2vw]/[1.1] font-semibold text-white tracking-[-0.02em] capitalize">
            {data?.title}
          </h1>

          {breadcrumbs?.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mt-3 lg:mt-[0.9vw] flex flex-wrap items-center gap-2 text-xs lg:text-[0.75vw] text-white/40"
            >
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.label}>
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand-500 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </div>
  );
};

export default Banner;
