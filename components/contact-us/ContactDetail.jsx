import React from "react";
import Button from "../layout/Button";
import EnquireForm from "./EnquireForm";

const ContactDetail = () => {
  return (
    <div className=" containerx containery flex max-lg:flex-col items-start justify-center lg:gap-[3vw] gap-5">
      <div className=" w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.015997011007!2d73.123896875803!3d19.23813458200016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be794259ee051b3%3A0x19aa543786f4db3b!2sSamim%20Consultancy!5e0!3m2!1sen!2sin!4v1750615950334!5m2!1sen!2sin"
          className=" w-full h-[25rem] md:h-[20rem] lg:h-[30vw]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" lg:w-1/2">
        <h6 className=" heading-md text-primary">Reach Us</h6>
        <EnquireForm />
      </div>
    </div>
  );
};

export default ContactDetail;
