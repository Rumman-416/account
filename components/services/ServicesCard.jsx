import Image from "next/image";
import React from "react";
import Link from "next/link";

const ServicesCard = ({ item }) => {
  return (
    <Link href={`/services/${item?.slug}`} className="block group">
      <div className="rounded-2xl overflow-hidden bg-dark-800/50 border border-white/[0.06] hover:border-brand-500/30 transition-all duration-500">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <Image
            fill
            src={item?.image}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            alt={item?.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />

          {/* Arrow */}
          <div className="absolute top-4 right-4 lg:top-[1vw] lg:right-[1vw] w-8 h-8 lg:w-[2vw] lg:h-[2vw] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -rotate-45 group-hover:rotate-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-[1.2vw]">
          <h3 className="text-white text-base lg:text-[1.1vw] font-semibold mb-2">
            {item?.name}
          </h3>
          <p className="text-white/40 text-xs lg:text-[0.75vw] font-light leading-relaxed line-clamp-2">
            {item?.description}
          </p>
          <div className="mt-3 lg:mt-[0.8vw] flex items-center gap-2 text-brand-500 text-xs lg:text-[0.7vw] font-medium">
            <span>Explore</span>
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServicesCard;
