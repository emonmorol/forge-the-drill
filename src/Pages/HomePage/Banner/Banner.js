import React from "react";
import MainButton from "../../../Components/MainButon/MainButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-content bg-banner h-[80vh] bg-no-repeat bg-cover text-white">
      <div>
        <h2 className="text-left text-5xl uppercase font-bold text-white">
          Drilling Tools
        </h2>
        <p className="w-[60ch] text-sm">
          Since 1984, Drilling Tools International has been a leading provider
          of downhole tools to the land and offshore drilling markets. We now
          offer products and services to multiple segments in drilling,
          completion, and production.
        </p>
        <MainButton>About Us</MainButton>
      </div>
    </div>
  );
};

export default Banner;
