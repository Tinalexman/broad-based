import React from "react";

import Image from "next/image";
import Icon from "@/public/logo.png";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <Image src={Icon} alt="logo" className="w-16 h-auto object-cover" />
      <h2 className="text-2xl text-primary font-bold">
        Broad<span className="text-secondary">based</span>{" "}
      </h2>
    </div>
  );
};

export default Logo;
