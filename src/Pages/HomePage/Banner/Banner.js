import React from "react";
import MainButton from "../../../Components/MainButton/MainButton";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-container bg-banner h-[80vh] bg-fixed bg-no-repeat bg-cover text-white">
      <div className="banner-content">
        <h2 className="text-left text-5xl uppercase font-bold text-white">
          <span>Drilling Tools</span>
        </h2>
        <p className="w-[90ch] text-sm my-3">
          Since 1984, Drilling Tools International has been a leading provider
          of down hole tools to the land and offshore drilling markets. We now
          offer products and services to multiple segments in drilling,
          completion, and production.
        </p>
        <MainButton>About Us</MainButton>
      </div>
    </section>
  );
};

export default Banner;
