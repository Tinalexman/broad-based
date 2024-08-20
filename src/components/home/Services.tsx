"use client";

import React, { useRef } from "react";

import Link from "next/link";

import { TbHomeFilled } from "react-icons/tb";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { IconType } from "react-icons";

import { motion, useInView } from "framer-motion";

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
      name: "Home Internet",
      icon: TbHomeFilled,
      description:
        "Our Fiber to the Home (FTTH) service ensures minimal maintenance and maximum performance.",
    },
    {
      link: "/",
      name: "Corporate Internet",
      icon: PiBuildingOfficeFill,
      description:
        "Designed for companies of all sizes, our fiber connections offer unparalleled speed and reliability.",
    },
    {
      link: "/",
      name: "Wireless Network",
      icon: FaWifi,
      description:
        "Create a seamless internet experience throughout your home or office with our WiFi Internet service.",
    },
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, { amount: "some" });

  return (
    <div className="flex flex-col w-full gap-8 items-center px-20 py-20 relative">
      <div className="w-[40rem] items-center gap-3">
        <h2 className="text-title text-center text-dark">
          Our Special Services For You
        </h2>
        <h3 className="text-small text-center text-neutral">
          Discover how our innovative technology and customer-centric approach
          deliver unparalleled internet experiences, tailored to empower every
          aspect of your digital life.
        </h3>
      </div>
      <div
        ref={targetRef}
        className="w-full flex gap-8 items-center justify-center z-10"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  ease: "easeIn",
                  type: "spring",
                  bounce: 0.6,
                },
              }}
              animate={{
                y: isInView ? "0%" : "20%",
                transition: {
                  ease: "easeIn",
                  duration: 1,
                  delay: i * 0.75,
                  type: "spring",
                  bounce: 0.7,
                },
              }}
              key={i}
              className={` hover:bg-opacity-40  text-primary flex flex-col items-center gap-3 w-[20%] h-[15rem] px-4 py-4 bg-white 
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
        className="bg-secondary-accent bg-opacity-10 rounded-2xl size-[350px] absolute -left-[100px] top-[60px]"
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
        className="bg-secondary-accent bg-opacity-10 rounded-full size-[250px] absolute -right-[100px] top-[60px]"
      />
    </div>
  );
};

export default Services;
