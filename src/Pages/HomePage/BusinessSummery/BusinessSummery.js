import CountUp from "react-countup";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./BusinessSummery.css";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BusinessSummery = () => {
  return (
    <section className="summery-banner-content">
      <div className="summery-banner py-15 px-5">
        {/* <h2 className="uppercase mt-10 text-3xl lg:text-5xl text-primary font-extrabold text-center font-poppins">
          We Delivered Drills All Over The World
        </h2> */}
        <SectionTitle>We Delivered Drills All Over The World</SectionTitle>
        <div>
          <div className="summery-inside-banner">
            <div className="grid grid-cols-1 py-10 gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary flex flex-col justify-center">
                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                  <i className="fa-solid fa-flag"></i>
                </div>
                <div className="text-center">
                  <CountUp start={0} end={49} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span
                          className="text-4xl my-2 text-primary font-semibold"
                          ref={countUpRef}
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span className="text-4xl my-2 text-primary font-semibold">
                    +
                  </span>
                  <p className="text-2xl font-semibold my-2 uppercase font-mono">
                    TOTAL AWARDS
                  </p>
                </div>
              </div>
              <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                  <i className="fa-solid fa-truck"></i>
                </div>
                <div className="text-center">
                  <CountUp start={0} end={500} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span
                          className="text-4xl my-2 text-primary font-semibold"
                          ref={countUpRef}
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span className="text-4xl my-2 text-primary font-semibold">
                    K+
                  </span>
                  <p className="text-2xl font-semibold my-2 uppercase font-mono">
                    TOTAL deliveries
                  </p>
                </div>
              </div>
              <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary  flex flex-col justify-center">
                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="text-center">
                  <CountUp start={0} end={70} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span
                          className="text-4xl my-2 text-primary font-semibold"
                          ref={countUpRef}
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span className="text-4xl my-2 text-primary font-semibold">
                    K+
                  </span>
                  <p className="text-2xl font-semibold my-2 uppercase font-mono">
                    Happy clients
                  </p>
                </div>
              </div>
              <div className="lg:mx-10 rounded-2xl p-4 bg-white text-gray-500 hover:text-primary   flex flex-col justify-center">
                <div className="text-6xl py-5 mb-2 px-[1.45rem] cursor-text mx-auto transition-all duration-300">
                  <i className="fa-solid fa-thumbs-up"></i>
                </div>
                <div className="text-center">
                  <CountUp start={0} end={10} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span
                          className="text-4xl my-2 text-primary font-semibold"
                          ref={countUpRef}
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <span className="text-4xl my-2 text-primary font-semibold">
                    K+
                  </span>
                  <p className="text-2xl font-semibold my-2 uppercase font-mono">
                    positive Feedbacks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5  mb-10">
          <h2 className="uppercase text-lg lg:text-2xl text-primary font-extrabold text-center font-poppins">
            if you have any queries
          </h2>
          <button className="button w-3/5"> Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;
