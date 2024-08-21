import Banner from "./Banner";
import Services from "./Services";
import Reasons from "./Reasons";
import Location from "./Location";
import Plans from "./Plans";
import Testimonies from "./Testimonies";
import GetStarted from "./GetStarted";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-background w-[100vw]">
      <Banner />
      <Services />
      <div className="h-20" />
      <Location />
      <div className="h-20" />
      <Reasons />
      <Plans />
      <Testimonies />
      <div className="h-20" />
      <GetStarted />
      <Contact />
    </div>
  );
};

export default Home;
