import React from "react";

import Image from "next/image";
import Man from "@/public/home/man_browsing.jpeg";

const Reasons = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-10 px-40">
      <Image
        src={Man}
        alt="man browsing"
        className="w-full h-[600px] rounded-2xl object-cover"
      />
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-title text-dark">
            Unbeatable Internet Solutions
          </h2>
          <p className="text-subtitle text-dark font-medium">
            Experience the difference with our reliable and customer-centric
            approach
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-body text-dark font-bold">Abuja</h2>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
