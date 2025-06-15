import React from "react";

const Button = ({ text, white }) => {
  return (
    <button
      className={`${
        white
          ? "border-[#036] hover:after:bg-[#036] text-[#036]"
          : "border-[#1E3C3E] after:bg-[#1E3C3E] text-[#1E3C3E]"
      } border-2 overflow-hidden px-5 py-2 lg:px-[1.35vw] lg:py-[0.6vw] rounded-3xl relative after:absolute  after:h-full after:z-[-1] after:w-0 hover:after:w-[105%] after:left-0 after:top-0 after:rounded-3xl  after:transition-all after:duration-300  hover:text-white`}
    >
      <span className="font-medium ">{text}</span>
    </button>
  );
};

export default Button;
