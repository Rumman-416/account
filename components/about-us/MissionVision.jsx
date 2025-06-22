import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

const MissionVision = () => {
  const [isFixed, setIsFixed] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const topOffset = rect.top;
        const bottomOffset = rect.bottom;

        // If container is partially visible in viewport (top passed and bottom not yet passed)
        const shouldFix = topOffset <= 0 && bottomOffset >= window.innerHeight;

        setIsFixed(shouldFix);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const data = [
    {
      bgImg: "/images/about/vision/bg1.png",
      icon: "/images/about/vision/1.svg",
      title: "Our vision",
      desc: "We are committed to being the ambassadors of well-being and sustainability. We aspire to redefine the concept of luxury living by combining timeless design, impeccable craftsmanship, and innovative technology. Our vision is centred around building lasting relationships with our customers and shaping the future of real estate by creating extraordinary spaces that inspire lives.",
    },
    {
      bgImg: "/images/about/vision/bg2.png",
      icon: "/images/about/vision/2.svg",
      title: "Our mission",
      desc: "To redefine the way people experience real estate and be the leading brand known for our unwavering dedication to excellence. We are driven by a deep commitment to provide exceptional service, create extraordinary living spaces, and make a positive impact on the communities we serve.",
    },
  ];
  return (
    <div ref={containerRef} className=" relative">
      {data.map((item, index) => (
        <div
          key={index}
          className="  h-screen w-full flex justify-center lg:justify-start items-end relative project-gallery"
        >
          <div
            className={`${
              isFixed ? "fixed" : "absolute"
            } right-[0%] top-[5%] w-full`}
          >
            {/* <Title
              first={item?.sectionTitle?.firstTitle}
              second={item?.sectionTitle?.secondTitle}
              positionRight={false}
            /> */}
          </div>
          <Image
            height={1080}
            width={1920}
            src={item?.bgImg}
            alt={item?.title}
            className="object-cover size-full absolute z-[-1]"
          />
          <div
            className={` containerx containery ${
              isFixed ? "fixed" : "absolute"
            } text-white bottom-0 left-0`}
          >
            <Image
              height={100}
              width={100}
              src={item?.icon}
              alt={"icon"}
              className=" size-20"
            />
            <h6 className=" heading my-5">{item.title}</h6>
            <p className="content lg:w-1/2">{item?.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;
