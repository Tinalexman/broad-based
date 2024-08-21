"use client";

import React, { useRef } from "react";

import { useInView, motion } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", once: true });

  return (
    <div className="w-full grid grid-cols-2 place-content-center place-items-center gap-10 px-40 py-20">
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-title text-dark">Send Us A Message</h2>
          <p className="text-body text-dark font-medium">
            Let&apos;s Craft Your Digital Future Together: Share Your Needs and
            We&apos;ll Deliver Excellence in Every Connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
