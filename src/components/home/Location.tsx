import React from "react";

import Image from "next/image";
import City from "@/public/home/city.jpeg";
const Location = () => {
  return (
    <div className="w-full grid grid-cols-2 place-content-center place-items-center gap-10 px-40">
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-title text-dark">We are everywhere!!!</h2>
          <p className="text-subtitle text-dark font-medium">
            We provide{" "}
            <span className="font-bold">
              Metro Fiber Optic Local Loop Services
            </span>
            , covering some of the major Business districts in Nigeria.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-button text-primary-accent font-bold">
            &bull; Abuja
          </h2>
          <h2 className="text-button text-primary-accent font-bold">
            &bull;Lagos
          </h2>
          <h2 className="text-button text-primary-accent font-bold">
            &bull;Enugu
          </h2>
          <h2 className="text-button text-primary-accent font-bold">
            &bull;Rivers
          </h2>
          <h2 className="text-button text-primary-accent font-bold">
            &bull; Akwa Ibom
          </h2>
          <h2 className="text-button text-primary-accent font-bold">
            And many more
          </h2>
        </div>
      </div>
      <Image
        src={City}
        alt="man browsing"
        className="w-full h-[400px] rounded-2xl object-cover"
      />
    </div>
  );
};

export default Location;
