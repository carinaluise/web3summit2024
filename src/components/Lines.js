import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import linesSVG from "../images/lines.svg";

const Lines = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.pageX);
      y.set(e.pageY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  const rotateX = useTransform(y, [0, 400], [-45, 45]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  return (
    <div className="svg-container">
      <motion.img style={{ rotateX, rotateY }} src={linesSVG} alt="" />
      <motion.img src={linesSVG} alt="" />
      <motion.img src={linesSVG} alt="" />
    </div>
  );
};

export default Lines;
