import React from "react";
import Counter from "../reusableComponent/counter";

const Experience = () => {
  const data = [
    {
      count: "12",
      suffix: "+",
      desc: "years of experience",
    },
    {
      count: "12",
      suffix: "+",
      desc: "years of experience",
    },
    {
      count: "12",
      suffix: "+",
      desc: "years of experience",
    },
    {
      count: "12",
      suffix: "+",
      desc: "years of experience",
    },
  ];
  return (
    <div className="bg-[url('/images/home/experience.jpg')] bg-cover bg-center bg-fixed relative">
      <div className=" bg-black bg-opacity-45 absolute size-full" />
      <div className=" container mx-auto relative z-[1] y_container text-white">
        <h3 className="heading  text-center mb-[1.8vw]">Experience</h3>
        <p className=" mb-[1.8vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          officia deleniti ratione voluptatem voluptatum nobis dolorem
          distinctio debitis molestiae rem omnis corrupti illo sapiente adipisci
          quidem consequatur reprehenderit cumque, possimus natus rerum nam!
          Voluptates minima odio ab aperiam, dolores in voluptatem expedita,
          cumque itaque ad qui nostrum quia voluptas minus suscipit. Facilis,
          nisi consequatur.
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 lg:gap-y-0">
          {data.map((item, index) => (
            <div key={index} className=" mx-auto">
              <Counter
                start={0}
                end={item?.count}
                duration={2500}
                suffix={item?.suffix}
              />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
