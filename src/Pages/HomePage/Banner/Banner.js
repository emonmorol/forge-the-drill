import React from "react";
import bannerVideo from "../../../Assets/Videos/Banner.mp4";

const Banner = () => {
  return (
    <>
      <video autoplay muted loop playsInline id="myVideo">
        <source src={bannerVideo} type="video/mp4" />
        {/* Your browser does not support HTML5 video. */}
      </video>
    </>
  );
};

export default Banner;
