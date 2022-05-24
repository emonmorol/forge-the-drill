import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummery from "../BusinessSummery/BusinessSummery";
import Drills from "../Drills/Drills";
import Reviews from "../Reviews/Reviews";
import Footer from "../../../Components/Footer/Footer";
import DrillFeature from "../DrillFeature/DrillFeature";
import Process from "../Process/Process";

const Home = () => {
  return (
    <div>
      <Banner />
      <BusinessSummery />
      <DrillFeature />
      <Drills />
      <Reviews />
      <Process />
      <Footer />
    </div>
  );
};

export default Home;
