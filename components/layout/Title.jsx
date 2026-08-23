import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, light = false }) => {
  return (
    <h6 className={`heading capitalize ${light ? "text-white" : "text-white"}`}>
      {title}
    </h6>
  );
};

export default Title;
