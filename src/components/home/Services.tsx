"use client";

import React from "react";

import Link from "next/link";

import { TbHomeFilled } from "react-icons/tb";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { IconType } from "react-icons";

import { motion } from "framer-motion";

interface iService {
  name: string;
  icon: IconType;
  description: string;
  link: string;
}

const Services = () => {
  const services: iService[] = [
    {
      link: "/",
      name: "Corporate Internet",
      icon: PiBuildingOfficeFill,
      description:
        "Designed for companies of all sizes, our fiber connections offer unparalleled speed and reliability.",
    },
    {
      link: "/",
      name: "Home Internet",
      icon: TbHomeFilled,
      description:
        "Our Fiber to the Home (FTTH) service ensures minimal maintenance and maximum performance.",
    },
    {
      link: "/",
      name: "Wireless Network",
      icon: FaWifi,
      description:
        "Create a seamless internet experience throughout your home or office with our WiFi Internet service.",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 items-center px-20 relative">
      <div className="w-[40rem] items-center gap-3">
        <h2 className="text-title text-center text-dark">
          Our Special Service For You
        </h2>
        <h3 className="text-small text-center text-neutral">
          Discover how our innovative technology and customer-centric approach
          deliver unparalleled internet experiences, tailored to empower every
          aspect of your digital life.
        </h3>
      </div>
      <div className="w-full flex gap-8 items-center justify-center z-10">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                  type: "spring",
                  bounce: 0.6,
                },
              }}
              key={i}
              className={`text-secondary flex flex-col items-center gap-3 w-[20%] h-[15rem] px-4 py-4 bg-white 
                 shadow-custom 
                 ${
                   i === 0
                     ? "rounded-l-2xl"
                     : i === 2
                     ? "rounded-r-2xl"
                     : "rounded-none"
                 }
                 `}
            >
              <Icon size={48} />
              <p className="text-body font-bold text-dark">{service.name}</p>
              <p className="text-small font-medium text-dark text-center">
                {service.description}
              </p>
              <Link href={service.link} className="font-bold text-subbody">
                Learn More
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 4,
            ease: "easeIn",
            repeat: Infinity,
          },
        }}
        className="bg-secondary-accent bg-opacity-10 rounded-2xl size-[400px] absolute -left-[100px] top-[60px]"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.2, 1.0],
          transition: {
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
          },
        }}
        className="bg-secondary-accent bg-opacity-10 rounded-full size-[400px] absolute -right-[100px] top-[60px]"
      />
    </div>
  );
};

export default Services;
