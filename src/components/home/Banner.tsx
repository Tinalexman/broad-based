"use client";

import React, { useState, useRef } from "react";

import { TypeAnimation } from "react-type-animation";
import { IoArrowForward } from "react-icons/io5";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Navbar from "../global/Navbar";

const Banner = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const [swap, setSwap] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (swap && latest < 0.98) {
      setSwap(false);
    } else if (!swap && latest > 0.98) {
      setSwap(true);
    }
  });

  return (
    <div
      ref={targetRef}
      className="w-full h-[100vh] bg-[url('../../public/home/young_blue_men.png')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="fixed z-50">
        <Navbar swap={swap} />
      </div>
      <div className="bg-gradient-to-r md:bg-gradient-to-b from-black-50 to-transparent w-full h-full flex justify-between items-center px-20 md:px-5">
        <div className="flex flex-col w-[45%] md:w-full gap-8">
          <div className="w-full space-y-3">
            <div className="space-y-2">
              <div className="text-sm font-bold text-primary bg-blue-200 px-3 py-1 rounded-full w-fit">
                READY TO HELP YOU!
              </div>
              <TypeAnimation
                sequence={[
                  "The Best Internet Service Provider in the country.",
                  1500,
                  "The Best Internet Service Provider in Nigeria.",
                  3000,
                ]}
                preRenderFirstString
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white text-display"
              />
            </div>

            <h2 className="text-subdisplay text-[#F9F9F9]">
              Stay Connected Without Interuptions with our Blazing Fast Internet
              for All Your Needs
            </h2>
          </div>
          <button className="text-white text-button flex items-center justify-center gap-2 rounded bg-primary px-2 py-3 w-44  mt-2">
            Get Started
            <motion.div
              initial={{
                x: "0%",
              }}
              animate={{
                x: "10%",
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  repeatType: "reverse",
                },
              }}
            >
              <IoArrowForward size={20} />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
