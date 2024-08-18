import Banner from "./Banner";
import EndUsers from "./EndUsers";
import Services from "./Services";
import Reasons from "./Reasons";
import Location from "./Location";

const Home = () => {
  return (
    <div className="bg-[#FBFBFB] w-[100vw]">
      <Banner />
      <EndUsers />
      <Services />
      <div className="h-40" />
      <Location />
      <div className="h-20" />
      <Reasons />
      <div className="h-40" />
    </div>
  );
};

export default Home;
