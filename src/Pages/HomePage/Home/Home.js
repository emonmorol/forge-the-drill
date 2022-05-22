import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummery from "../BusinessSummery/BusinessSummery";
import Drills from "../Drills/Drills";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <BusinessSummery />
      <Drills />
      <Reviews />
    </div>
  );
};

export default Home;
