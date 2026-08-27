import Image from "next/image";
import React from "react";
import Link from "next/link";

const ServicesCard = ({ item }) => {
  const count = item?.subServices?.length ?? 0;

  return (
    <Link href={`/services/${item?.slug}`} className="group block h-full">
      <article
        className="h-full flex flex-col rounded-2xl overflow-hidden
          bg-dark-800/50 border border-white/[0.08]
          transition-all duration-500
          hover:border-brand-500/40
          hover:shadow-[0_18px_50px_-20px_rgba(245,104,58,0.45)]
          hover:-translate-y-1"
      >
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden relative">
          <Image
            fill
            src={item?.image}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt={item?.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

          {count > 0 && (
            <span
              className="absolute top-4 left-4 lg:top-[1vw] lg:left-[1vw]
                inline-flex items-center rounded-full
                border border-white/15 bg-dark-950/60 backdrop-blur-sm
                px-2.5 py-1 lg:px-[0.7vw] lg:py-[0.25vw]
                text-[10px] lg:text-[0.65vw] font-medium text-white/80"
            >
              {count} services
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 lg:p-[1.4vw]">
          <h3 className="text-white text-base lg:text-[1.15vw] font-semibold mb-2">
            {item?.name}
          </h3>
          <p className="text-white/45 text-xs lg:text-[0.78vw] font-light leading-relaxed line-clamp-2">
            {item?.description}
          </p>

          {/* A concrete preview of what's inside, instead of the name alone */}
          {count > 0 && (
            <ul className="mt-4 lg:mt-[1vw] flex flex-wrap gap-1.5 lg:gap-[0.4vw]">
              {item.subServices.slice(0, 3).map((sub) => (
                <li
                  key={sub.name}
                  className="rounded-md border border-white/[0.07] bg-white/[0.03]
                    px-2 py-1 lg:px-[0.5vw] lg:py-[0.2vw]
                    text-[10px] lg:text-[0.65vw] text-white/50"
                >
                  {sub.name}
                </li>
              ))}
              {count > 3 && (
                <li className="px-2 py-1 lg:px-[0.5vw] lg:py-[0.2vw] text-[10px] lg:text-[0.65vw] text-white/30">
                  +{count - 3} more
                </li>
              )}
            </ul>
          )}

          <div className="mt-auto pt-5 lg:pt-[1.2vw] flex items-center gap-2 text-brand-500 text-xs lg:text-[0.78vw] font-medium">
            <span>Explore</span>
            <svg
              className="w-3.5 h-3.5 lg:w-[0.9vw] lg:h-[0.9vw] transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ServicesCard;
