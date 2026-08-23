import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../Animation/Variants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

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
        <div className="containerx">
          <Swiper
            cssMode={false}
            grabCursor={true}
            keyboard={true}
            freeMode={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 24 },
            }}
            centeredSlides={true}
            navigation={{
              nextEl: ".btn-next-test",
              prevEl: ".btn-prev-test",
            }}
            allowTouchMove={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card-glass p-6 lg:p-[2vw] h-full min-h-[200px] lg:min-h-[14vw] flex flex-col justify-between group hover:border-brand-500/20 transition-all duration-500">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 lg:mb-[1vw]">
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
                  <p className="content text-white/60 font-light leading-relaxed flex-1">
                    &ldquo;{item.testimonial}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-5 lg:mt-[1.5vw] pt-4 lg:pt-[1vw] border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 lg:w-[2.5vw] lg:h-[2.5vw] rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                        <span className="text-brand-500 text-sm lg:text-[0.9vw] font-semibold">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm lg:text-[0.85vw] font-medium">
                          {item.name}
                        </p>
                        <p className="text-white/30 text-xs lg:text-[0.65vw]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
