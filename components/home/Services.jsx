import React, { useRef } from "react";
import { useScroll } from "framer-motion";

import Card from "./Card";

const Services = () => {
  const data = [
    {
      title: "Taxation",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem consectetur quae est doloribus ad quidem. Consequuntur fugit animi quo, dolorum nam quibusdam unde sunt omnis nostrum distinctio maxime nemo.",
      img: "/images/sevices/1.jpg",
      color: "bg-sky-800",
    },
    {
      title: "Licence",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem consectetur quae est doloribus ad quidem. Consequuntur fugit animi quo, dolorum nam quibusdam unde sunt omnis nostrum distinctio maxime nemo.",
      img: "/images/sevices/2.jpg",
      color: "bg-sky-700",
    },
    {
      title: "Provident Fund",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem consectetur quae est doloribus ad quidem. Consequuntur fugit animi quo, dolorum nam quibusdam unde sunt omnis nostrum distinctio maxime nemo.",
      img: "/images/sevices/3.jpg",
      color: "bg-sky-600",
    },
    {
      title: "Customs",
      Content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem consectetur quae est doloribus ad quidem. Consequuntur fugit animi quo, dolorum nam quibusdam unde sunt omnis nostrum distinctio maxime nemo.",
      img: "/images/sevices/4.jpg",
      color: "bg-sky-500",
    },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} className=" container y_container mx-auto ">
      {data.map((item, index) => {
        const targetScale = 1 - (data.length - index) * 0.05;
        return (
          <Card
            index={index}
            item={item}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Services;
