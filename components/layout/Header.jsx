import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
// import EnquireModal from "../modal/EnquireModal";
// import EnquireSmModal from "../modal/EnquireSmModal";

const Header = ({ srd }) => {
  const router = useRouter();

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sideBar, setSideBar] = useState(false);
  const [showEnquireModal, setShowEnquireModal] = useState(false);
  const [showGif, setShowGif] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const onDetailApply = () => {
    setShowEnquireModal(true);
    // setJobDescription(item?.jobDescription);
  };

  const onClose = () => {
    setShowEnquireModal(false);
  };

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up or near the top
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const nav = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about-us" },
    { name: "services", link: "/services" },
    { name: "contact us", link: "/contact-us" },
    // { name: "blogs", link: "/blogs" },
    // { name: "news media ", link: "/news-media" },
    // { name: "achivements ", link: "/achivements" },
    // {
    //   name: "partner with us",
    //   link: "/careers",
    //   subMenu: [
    //     {
    //       name: "Apply for job",
    //       link: "/careers/#career-form",
    //     },
    //     {
    //       name: "Vendors",
    //       link: "/careers/#vendors",
    //     },
    //     {
    //       name: "Land Development",
    //       link: "/careers/#land-development",
    //     },
    //   ],
    // },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolledDown ? -180 : 0 }} // Slides out when scrolling down
        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth motion
        className=" fixed z-10 lg:py-[0.625vw] header-gradient w-full"
      >
        <div className=" lg:px-[2vw] lg:py-[.5vw] p-3  flex justify-between items-center  w-[90%] mx-auto text-center bg-[#E8EDE6] bg-opacity-55  backdrop-blur-lg rounded-full border-[1.8px]  border-[#F5683A]">
          <div className="   lg:w-[44%] lg:flex justify-evenly items-center ">
            <div className=" lg:w-[12%] flex justify-center items-center  ">
              <Link href={"/"} className=" ">
                <Image
                  height={100}
                  width={100}
                  src={"/logo.svg"}
                  // src={showGif ? "/logo.gif" : "/logohead.svg"}
                  alt="logo"
                  className={` size-10 lg:size-[3.5vw]`}
                />
              </Link>
            </div>
            {nav.map((item, index) => (
              <div
                key={index}
                className="relative hidden lg:flex justify-center items-center lg:gap-[0.45vw] group cursor-pointer"
              >
                <Link href={item.link}>
                  <p
                    className={`content uppercase text-[#333] font-light border-b-2 ${
                      router.pathname === item.link
                        ? "  border-[#F5683A]"
                        : " border-none"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
                {item?.subMenu && (
                  <>
                    <Image
                      height={22}
                      width={22}
                      src={"/icons/arrowDown.svg"}
                      className={` cursor-pointer`}
                    />
                    <div className=" absolute hidden group-hover:block bg-[#011a2e] top-[3.5vw] left-0 bg-opacity-85 border lg:py-[0.45vw] lg:px-[0.5vw] border-[#c39a65]">
                      {item?.subMenu?.map((i, indexsm) => (
                        <Link key={indexsm} href={i.link}>
                          <p
                            className={`text-[0.65vw] uppercase text-[#333] text-nowrap mb-1 ${
                              router.pathname === i.link
                                ? " font-extrabold"
                                : "font-light"
                            }`}
                          >
                            {i.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* <button
            onClick={onDetailApply}
            className=" lg:px-[2vw] border-l-2 border-green-500 relative overflow-hidden text-nowrap after:bg-white after:w-0 after:h-full hover:after:w-full after:absolute after:top-0 after:left-0 after:transition-all after:z-[-1] after:duration-300 px-3 py-2 group lass"
          >
            <span className=" text-[#333] content group-hover:text-[#333] transition-colors duration-300 uppercase ">
              Enquire Now
            </span>
          </button> */}
          <div className=" max-lg:hidden">
            <Button text={"Enquire Now"} white={false} />
          </div>

          <div className=" absolute right-5 md:right-10 lg:hidden">
            <Image
              src="/icons/menu.svg"
              width={100}
              height={100}
              alt="Menu icon"
              className="cursor-pointer h-[2rem] w-auto"
              onClick={showSideBar}
            />
          </div>
        </div>
      </motion.div>
      <div
        className={`h-[100vh] bg-[#fff] w-[80%] md:w-80 fixed top-0 z-10 ease-in-out transition-all duration-1000 flex flex-col justify-start gap-10 ${
          sideBar ? "right-0" : "right-[-1000px]"
        }`}
      >
        <button onClick={showSideBar} className="text-[#333]">
          <div className="relative h-10 w-10 rotate-45 ml-3">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-black transform -translate-x-1/2"></div>
          </div>
        </button>
        <motion.ul
          className="text-[#333] flex flex-col  justify-start items-start pl-16 gap-6 max-h-[80vh] "
          initial="hidden"
          animate={sideBar ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
        >
          {nav.map((item, index) => (
            <motion.li
              key={index}
              className="text-2xl relative flex justify-between gap-5 items-center"
              variants={itemVariants}
              transition={{ duration: 0.75 }}
            >
              <Link href={item.link}>
                <p className=" uppercase content" onClick={showSideBar}>
                  {item.name}
                </p>
              </Link>
              {item?.subMenu && (
                <>
                  <Image
                    height={22}
                    width={22}
                    src={"/icons/dropDownBlack.svg"}
                    className={` cursor-pointer`}
                    onClick={() => setShowSubMenu(!showSubMenu)}
                  />
                  <div
                    className={`absolute ${
                      showSubMenu ? "block" : "hidden"
                    }  top-8 left-0 shadow-md p-3 `}
                  >
                    {item?.subMenu?.map((i, indexsm) => (
                      <Link key={indexsm} href={i.link}>
                        <p
                          onClick={showSideBar}
                          className={`text-xs uppercase  text-nowrap mb-3 ${
                            router.pathname === i.link
                              ? " font-extrabold"
                              : "font-light"
                          }`}
                        >
                          {i.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </motion.li>
          ))}
        </motion.ul>
        {/* <motion.ul
          className="text-[#333] flex  justify-start items-center px-5 gap-6 mb-6"
          initial="hidden"
          animate={sideBar ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
        >
          {socialMedia.map((item, index) => (
            <motion.li
              key={index}
              className="text-2xl"
              variants={itemVariants}
              transition={{ duration: 0.75 }}
            >
              <Link href={item.link}>
                <Image
                  height={23}
                  width={23}
                  className=""
                  src={item.icon}
                  alt="social media"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul> */}
      </div>
      {/* <EnquireSmModal
        showEnquireModal={showEnquireModal}
        onClose={onClose}
        srd={srd}
      /> */}
    </>
  );
};

export default Header;
