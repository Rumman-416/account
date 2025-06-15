import Image from "next/image";
import React from "react";
import Counter from "../reusableComponent/counter";
import Button from "../layout/Button";

const ExperienceSection = () => {
  const data = [
    {
      count: "12",
      suffix: "+",
      desc: "years of experience",
    },
    {
      count: "102",
      suffix: "+",
      desc: "clients on board",
    },
    {
      count: "4.5",
      suffix: "",
      desc: "rating on justdial",
    },
  ];
  return (
    <div className=" containerx containery flex flex-col lg:flex-row justify-center items-center lg:items-end gap-5 lg:gap-[2.5vw] ">
      <div className=" lg:w-1/2 text-secondary">
        <div className=" w-full xs:flex justify-start items-end gap-5 bg-primary rounded-box ">
          <div className=" lg:w-[16vw] lg:h-[17vw] overflow-hidden rounded-xl">
            <Image
              height={350}
              width={200}
              src={"/images/home/overview/2.jpg"}
              className=" size-full object-cover"
            />
          </div>
          <div className=" xs:w-1/2">
            <h6 className=" heading-sm mb-3">Financial Planning</h6>
            <p className=" content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              eaque perspiciatis voluptatibus deleniti adipisci praesentium
              dignissimos reprehenderit
            </p>
          </div>
        </div>
        <div className=" rounded-box bg-primary  mt-5 xs:flex">
          {data?.map((item, index) => (
            <div key={index} className=" mx-auto max-xs:mb-2">
              <Counter
                start={0}
                end={item?.count}
                duration={2500}
                suffix={item?.suffix}
              />
              <p className=" content text-center mt-2 capitalize">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" lg:w-1/2 text-primary">
        <h6 className=" heading">Why choose us for services?</h6>
        <p className=" content my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illo quia amet voluptate.
        </p>
        <div className=" flex justify-start items-center shadow-2xl gap-5 rounded-box">
          <div className=" bg-primary p-3 lg:p-[0.8vw] rounded-xl overflow-hidden">
            <Image height={40} width={40} src={"/icons/wallet.svg"} />
          </div>

          <div className=" ">
            <h6>Cost-Effective</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className=" mt-8">
          <Button text={"Learn More"} white={false} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
