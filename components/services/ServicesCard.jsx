import Image from "next/image";
import React from "react";
import Button from "../layout/Button";

const ServicesCard = ({ item }) => {
  return (
    <div className=" overflow-hidden group rounded-xl shadow-lg">
      <div className=" overflow-hidden">
        <Image
          height={350}
          width={250}
          src={item?.img}
          className=" w-full group-hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className=" p-3 lg:p-[1.2vw] border-t-2 border-primary">
        <h6 className=" heading-sm text-primary">{item?.name}</h6>
        <p className=" content-sm text-[#333] my-4">{item?.description}</p>
        <div>
          <Button text={"know more"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
