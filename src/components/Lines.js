import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import Frame1 from "../images/frame-1.svg";
import Frame2 from "../images/frame-2.svg";

const Lines = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  const isWindowDefined = typeof window !== "undefined";

  useEffect(() => {
    if (isWindowDefined) {
      setIsMobile(window.innerWidth <= 790);

      const handleMouseMove = (e) => {
        x.set(e.pageX);
        y.set(e.pageY);
      };

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 790);
        if (isMobile) {
          x.set(0);
          y.set(0);
        }
      };

      const addOrRemoveEventListener = () => {
        if (isMobile) {
          document.removeEventListener("mousemove", handleMouseMove);
        } else {
          document.addEventListener("mousemove", handleMouseMove);
        }
      };

      addOrRemoveEventListener();
      window.addEventListener("resize", handleResize);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isMobile, x, y, isWindowDefined]);

  const translateYLayer1 = useTransform(
    y,
    [
      0,
      isWindowDefined ? window.innerHeight / 2 : 0,
      isWindowDefined ? window.innerHeight - 100 : 0,
    ],
    [0, 10, 0]
  );

  const translateYLayer2 = useTransform(
    y,
    [
      0,
      isWindowDefined ? window.innerHeight / 2 : 0,
      isWindowDefined ? window.innerHeight - 100 : 0,
    ],
    [0, -10, 0]
  );

  const translateYLayer1Scroll = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0, -5]
  );

  const translateYLayer2Scroll = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0, 10]
  );

  return (
    <div className="svg-container">
      <motion.img
        src={Frame1}
        style={{
          y: isMobile ? translateYLayer1Scroll : translateYLayer1,
        }}
      />
      <motion.img
        src={Frame2}
        style={{
          y: isMobile ? translateYLayer2Scroll : translateYLayer2,
        }}
      />
    </div>
  );
};

export default Lines;
