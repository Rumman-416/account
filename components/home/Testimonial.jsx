import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
const Testimonial = () => {
  const data = [
    {
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nisi dicta. Itaque optio alias atque vero dolorem perspiciatis explicabo repudiandae eligendi, harum saepe quisquam adipisci provident vel quibusdam iusto cumque blanditiis nostrum.",
      name: "Rumman Chowdury",
      ratings: 5,
    },
    {
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nisi dicta. Itaque optio alias atque vero dolorem perspiciatis explicabo repudiandae eligendi, harum saepe quisquam adipisci provident vel quibusdam iusto cumque blanditiis nostrum.",
      name: "Rumman Chowdury",
      ratings: 5,
    },
    {
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nisi dicta. Itaque optio alias atque vero dolorem perspiciatis explicabo repudiandae eligendi, harum saepe quisquam adipisci provident vel quibusdam iusto cumque blanditiis nostrum.",
      name: "Rumman Chowdury",
      ratings: 5,
    },
    {
      testimonial:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, nisi dicta. Itaque optio alias atque vero dolorem perspiciatis explicabo repudiandae eligendi, harum saepe quisquam adipisci provident vel quibusdam iusto cumque blanditiis nostrum.",
      name: "Rumman Chowdury",
      ratings: 5,
    },
  ];
  return (
    <div className=" containerx containery">
      <h6 className=" text-primary heading text-center">Testimonials</h6>
      <div className=" w-full mt-5 lg:mt-[2vw]">
        <Swiper
          cssMode={false} // Disable CSS mode for draggable functionality
          grabCursor={true} // Enables dragging with the cursor
          keyboard={true}
          freeMode={false} // Disable free mode for better drag control
          autoplay={{
            delay: 3500,
            disableOnInteraction: false, // Allow autoplay to continue after interaction
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 30 },
          }}
          centeredSlides={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: ".button-next-mg",
            prevEl: ".button-prev-mg",
          }}
          allowTouchMove={true} // Allow dragging and swiping
          loop={true}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          className=""
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-primary p-5 lg:p-[2.5vw] rounded-xl">
                <p className=" text-white content">{item?.testimonial}</p>
                <p className=" text-[#333] content-lg my-5">{item?.name}</p>
                <div className="flex gap-1">
                  {[...Array(item?.ratings)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill={index < item?.ratings ? "#FFD58D" : "#ddd"}
                    >
                      <path d="M8.85873 1.51246C9.21795 0.40689 10.782 0.406888 11.1413 1.51246L12.6493 6.1536C12.8099 6.64803 13.2707 6.98278 13.7905 6.98278H18.6705C19.833 6.98278 20.3163 8.47032 19.3759 9.1536L15.4279 12.022C15.0073 12.3276 14.8313 12.8692 14.9919 13.3636L16.4999 18.0048C16.8592 19.1103 15.5938 20.0297 14.6533 19.3464L10.7053 16.478C10.2848 16.1724 9.71524 16.1724 9.29466 16.478L5.34667 19.3464C4.40621 20.0297 3.14084 19.1103 3.50006 18.0048L5.00806 13.3636C5.16871 12.8692 4.99272 12.3276 4.57213 12.022L0.624144 9.1536C-0.316312 8.47032 0.167017 6.98278 1.32949 6.98278H6.20947C6.72934 6.98278 7.19009 6.64803 7.35073 6.1536L8.85873 1.51246Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
