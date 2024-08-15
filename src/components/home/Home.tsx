import Banner from "./Banner";
import EndUsers from "./EndUsers";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-blue-50 w-[100vw]">
      <Banner />
      <EndUsers />
      <Services />
      <div className="h-80" />
    </div>
  );
};

export default Home;
