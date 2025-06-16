import React from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
// import { cleanImage } from "../services/imageHandling";

const Footer = () => {
  const data = [
    {
      title: "project",
      linkTab: [
        {
          name: "Condominiums",
          link: "/projects/0",
        },
        {
          name: "Meadows",
          link: "/projects/0",
        },
        {
          name: "Crescent",
          link: "/projects/0",
        },
        {
          name: "Enclave",
          link: "/projects/0",
        },
      ],
    },
    {
      title: "useful links",
      linkTab: [
        {
          name: "About us",
          link: "/about-us",
        },
        {
          name: "Current Projects",
          link: "/projects",
        },
        {
          name: "Awards",
          link: "/awards",
        },
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Contact us",
          link: "/contact-us",
        },
      ],
    },
  ];
  const projects = [
    {
      name: "Condominiums",
      link: "/projects/0",
    },
    {
      name: "Meadows",
      link: "/projects/0",
    },
    {
      name: "Crescent",
      link: "/projects/0",
    },
    {
      name: "Enclave",
      link: "/projects/0",
    },
  ];
  const links = [
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Current Projects",
      link: "/projects",
    },
    {
      name: "Awards",
      link: "/awards",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];
  const csr = [
    {
      name: "Overview",
      link: "#",
    },
    {
      name: "CSR Initiatives",
      link: "#",
    },
  ];
  const social = [
    {
      img: "/images/footer/1.svg",
      link: "#",
    },
    {
      img: "/images/footer/2.svg",
      link: "#",
    },
    {
      img: "/images/footer/3.svg",
      link: "#",
    },
    {
      img: "/images/footer/4.svg",
      link: "#",
    },
    {
      img: "/images/footer/5.svg",
      link: "#",
    },
  ];
  return (
    <div className="max-lg:mt-20 bg-primary overflow-hidden text-secondary">
      <>
        <div className=" lg:w-[70%] containerx flex flex-col gap-5 lg:gap-[1.2vw] pt-8">
          <Title title={"contact us"} />
          <h6 className=" heading-sm  font-medium lg:font-semibold uppercase">
            Corporate Office Details
          </h6>
          <p className="content  mb-8 lg:mb-[3.125vw]">
            2nd Floor Alom House, 7B Pretoria Street Kolkata, India, PIN -
            700071
          </p>
          <div className="flex flex-wrap gap-5 justify-between lg:justify-start items-start lg:gap-[7.813vw]">
            {data?.map((item, index) => (
              <div key={index}>
                <h6 className=" heading-sm   font-medium lg:font-semibold uppercase">
                  {item?.title}
                </h6>
                {item?.linkTab?.map((sitem, sindex) => (
                  <Link href={`/${sitem.link}`} key={sindex}>
                    <p className=" font-medium lg:font-semibold cursor-pointer content">
                      {sitem.name}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center mx-10 lg:mx-20 my-5">
        <Image height={50} width={50} src={"/logoWhite.svg"} alt="logo" />

        <p className=" content ">
          © 2025 DIAMOND GROUP. All Rights Reserved. |{" "}
          <Link href={"/privacy-policy"}>Privacy Policy</Link> |
          <Link href={"/disclaimer"}>Disclaimer</Link>
        </p>
        <div className="flex justify-center items-center gap-3">
          {social?.map((item, index) => (
            <Link
              key={index}
              href={item?.link}
              className="p-3 border border-white rounded-full overflow-hidden"
            >
              <Image
                height={25}
                width={20}
                src={item?.img}
                alt={"social link"}
                className=" h-[1.5rem] w-[1.5rem]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
