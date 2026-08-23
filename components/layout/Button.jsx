import React from "react";

const Button = ({ text, white = false, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center overflow-hidden
        px-7 py-3 lg:px-[1.5vw] lg:py-[0.65vw]
        rounded-full text-sm lg:text-[0.9vw] font-medium
        transition-all duration-500 ease-out
        ${
          white
            ? "border border-white/20 text-white hover:border-brand-500 hover:text-brand-500 hover:shadow-[0_0_30px_rgba(245,104,58,0.15)]"
            : "bg-brand-500 text-white hover:bg-white hover:text-dark-900 hover:shadow-[0_0_30px_rgba(245,104,58,0.3)]"
        }
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg
          className="w-4 h-4 lg:w-[1vw] lg:h-[1vw] transition-transform duration-500 ease-out group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button>
  );
};

export default Button;
