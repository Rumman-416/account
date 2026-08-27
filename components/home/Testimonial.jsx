import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../Animation/Variants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const data = [
    {
      testimonial:
        "Samim Consultancy helped us streamline our entire GST compliance. Their team is knowledgeable, responsive, and truly cares about getting things right the first time.",
      name: "Rajesh Patil",
      role: "Business Owner, Patil Industries",
      ratings: 5,
    },
    {
      testimonial:
        "We've been using their income tax filing services for over 5 years. Professional, accurate, and always on time. Highly recommended for any business in Kalyan.",
      name: "Priya Sharma",
      role: "Director, Sharma Textiles",
      ratings: 5,
    },
    {
      testimonial:
        "The team handled our company registration and all licensing requirements seamlessly. Their expertise in Maharashtra regulations is unmatched.",
      name: "Amit Deshmukh",
      role: "Founder, Deshmukh Enterprises",
      ratings: 5,
    },
    {
      testimonial:
        "Excellent audit support and statutory compliance. They made what seemed like a complex process very manageable and stress-free for our team.",
      name: "Sneha Kulkarni",
      role: "CFO, Kulkarni Group",
      ratings: 5,
    },
    {
      testimonial:
        "From PF registration to ESIC compliance, Samim Consultancy handles all our labour law requirements efficiently. A trusted partner for growing businesses.",
      name: "Vikram Jadhav",
      role: "Partner, Jadhav Manufacturing",
      ratings: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-[6vw]">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      {/* Brand glow so the cards sit on something rather than on flat black */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vw] rounded-full bg-brand-500/[0.07] blur-[120px]" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.15)}
          className="containerx text-center mb-10 lg:mb-[4vw]"
        >
          <motion.span variants={fadeUp(0)} className="subheading block mb-3">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp(0.1)} className="heading text-white">
            What Our <span className="text-brand-500">Clients</span> Say
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp(0.2)}
          className="containerx"
        >
          <Swiper
            className="testimonial-swiper !pb-2"
            grabCursor
            keyboard
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            centeredSlides
            loop
            navigation={{ nextEl: ".btn-next-test", prevEl: ".btn-prev-test" }}
            pagination={{ el: ".testimonial-dots", clickable: true }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <article
                  className="group relative h-full flex flex-col overflow-hidden
                    rounded-2xl border border-white/[0.08]
                    bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                    p-6 lg:p-[1.8vw]
                    transition-colors duration-500
                    hover:border-brand-500/30"
                >
                  {/* Decorative quote mark */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="absolute -top-1 right-4 lg:right-[1.4vw] w-14 h-14 lg:w-[4vw] lg:h-[4vw] fill-brand-500/[0.13]"
                  >
                    <path d="M12.6 8v6.4H8.4c0 3.5 1.4 5.6 4.2 6.3V24C7.5 23.2 4.8 19.7 4.8 14V8h7.8zm14.6 0v6.4H23c0 3.5 1.4 5.6 4.2 6.3V24c-5.1-.8-7.8-4.3-7.8-10V8h7.8z" />
                  </svg>

                  {/* Stars */}
                  <div className="relative flex gap-1 mb-4 lg:mb-[1vw]">
                    {[...Array(item.ratings)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 lg:w-[0.9vw] lg:h-[0.9vw] text-brand-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="relative content text-white/70 flex-1">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="relative mt-6 lg:mt-[1.6vw] pt-5 lg:pt-[1.2vw] border-t border-white/[0.08]">
                    <div className="flex items-center gap-3 lg:gap-[0.8vw]">
                      <div className="shrink-0 w-11 h-11 lg:w-[2.8vw] lg:h-[2.8vw] rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(245,104,58,0.6)]">
                        <span className="text-white text-base lg:text-[1vw] font-semibold">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-sm lg:text-[0.9vw] font-medium truncate">
                          {item.name}
                        </p>
                        <p className="text-white/40 text-xs lg:text-[0.7vw] truncate">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="mt-8 lg:mt-[2.5vw] flex items-center justify-center gap-5 lg:gap-[1.5vw]">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="btn-next-prev btn-prev-test"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="testimonial-dots flex items-center justify-center" />

            <button
              type="button"
              aria-label="Next testimonial"
              className="btn-next-prev btn-next-test"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
