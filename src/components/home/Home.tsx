import React from "react";
import Banner from "./Banner";
import Navbar from "../global/Navbar";

const Home = () => {
  return (
    <div className="bg-light w-[100vw] relative">
      <div className="fixed top-5 left-20 right-20 z-10">
        <Navbar />
      </div>
      <Banner />
    </div>
  );
};

export default Home;
