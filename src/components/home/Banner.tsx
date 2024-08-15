"use client";

import React from "react";

import Image from "next/image";
import ManHoldingPhone from "@/public/home/man_with_phone.png";

import { TypeAnimation } from "react-type-animation";
import { IoArrowForward } from "react-icons/io5";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full h-[100vh] bg-[url('../../public/home/young_blue_men.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-r from-black-50 to-transparent w-full h-full flex justify-between items-center px-20">
        <div className="flex flex-col w-[45%] gap-8">
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
                style={{
                  fontSize: "4rem",
                  lineHeight: "4.5rem",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>

            <h2 className="text-subdisplay text-[#F9F9F9]">
              Stay Connected Without Interuptions with our Blazing Fast Internet
              for All Your Needs
            </h2>
          </div>
          <button className="text-white flex items-center justify-center gap-2 font-semibold rounded bg-primary px-2 py-4 w-40 mt-2">
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
