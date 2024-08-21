"use client";

import React from "react";

import Image from "next/image";
import Dog from "@/public/home/dog.jpg";

import { motion } from "framer-motion";

interface iTestimony {
  name: string;
  role: string;
  image: string;
  message: string;
  rating: number;
}

const Testimonies = () => {
  const testimonies: iTestimony[] = Array(10).fill({
    name: "John Doe",
    role: "Software Engineer",
    image: Dog,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4,
  });

  return (
    <div className="w-full flex flex-col gap-5 relative py-20">
      <div className="flex gap-5 items-center px-40">
        <h2 className="text-title text-dark w-[18rem]">
          Hear from Our Happy Customers
        </h2>
        <h3 className="text-small text-neutral w-[30rem]">
          See firsthand accounts of transformation and success stories from
          individuals and businesses who&apos;ve experienced unparalleled growth
          and satisfaction through our innovative solutions.
        </h3>
      </div>

      <div className="w-[100vw] h-[11rem]  gap-10 flex scrollbar-custom overflow-x-scroll z-10">
        {testimonies.map((tst, i) => (
          <div
            key={i}
            className="w-[20rem] h-[10rem] rounded bg-white shadow-custom"
          >
            <div className="w-[40rem] h-full py-3 px-5 flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-3 items-center w-fit">
                  <Image
                    src={tst.image}
                    alt={tst.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        className="size-80 border-2 border-secondary border-opacity-10 rounded-[2rem] absolute top-0 -right-10"
      />
      <motion.div
        animate={{
          rotate: -360,
          transition: {
            duration: 2,
            repeat: Infinity,
            delay: 1,
          },
        }}
        className="size-80 border-2 border-secondary border-opacity-10 rounded-[2rem] absolute top-0 -right-10"
      />
    </div>
  );
};

export default Testimonies;
