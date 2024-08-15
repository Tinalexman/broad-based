import React from "react";
import Marquee from "react-fast-marquee";

const EndUsers = () => {
  return (
    <div className="w-full flex flex-col items-center pt-10 pb-16 gap-8">
      <Marquee>
        <div className="w-20 h-20 bg-[url('../../public/home/access-bank.png')] bg-cover bg-no-repeat bg-center" />
        <div className="w-20 h-20 bg-[url('../../public/home/airtel.png')] bg-cover bg-no-repeat bg-center" />
      </Marquee>
    </div>
  );
};

export default EndUsers;
