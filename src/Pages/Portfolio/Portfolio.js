import React from "react";
import Footer from "../../Components/Footer/Footer";
import SkillCard from "./SkillCard";
import profile from "../../Assets/Images/profile.png";

const Portfolio = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "node.js",
    "express.js",
    "mongodb",
    "Firebase",
    "stripe",
    "axios",
    "tailwind",
    "bootstrap",
    "meterialui",
    "daisyui",
  ];

  return (
    <>
      <div className="bg-neutral min-h-screen">
        <div className="flex flex-col items-center max-w-7xl mx-auto ">
          <div className="flex items-center justify-center py-10 rounded-3xl shadow-sm hover:shadow-xl gap-10 my-14 border w-full hover:scale-105 transition-all duration-200">
            <div>
              <img
                className="w-60 h-860 rounded-full border-8 border-gray-400 shadow-lg overflow-hidden"
                src={profile}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold ">Emon Morol</h2>
              <p className=" text-sm">ekramulhasane69@gmail.com</p>
              <div className=" my-4">
                <p>Computer Science And Engineering</p>
                <p className="font-medium">
                  Hajee Mohammad Danesh Science And Technology University
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 w-full">
            <div className="border p-10 rounded-3xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-200">
              <h2 className="text-2xl uppercase font-semibold text-center mb-10">
                My Projects
              </h2>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h2 className="text-xl uppercase font-semibold mb-2">
                    BagsQ
                  </h2>
                  <div>
                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Live Site Link </p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://bagsq12.web.app/"
                        target="blank_"
                      >
                        BagsQ
                      </a>
                    </div>

                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Client site code link</p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://github.com/emonmorol/bagsq-client"
                        target="blank_"
                      >
                        Github Client
                      </a>
                    </div>
                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Server site code link </p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://github.com/emonmorol/bagsq-server"
                        target="blank_"
                      >
                        Github Server
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl uppercase font-semibold mb-2">
                    Blood Buddies
                  </h2>
                  <div>
                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Live Site Link </p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://blood-buddies-donation.web.app/"
                        target="blank_"
                      >
                        Blood Buddies
                      </a>
                    </div>

                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Client site code link</p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://github.com/emonmorol/blood_boddies"
                        target="blank_"
                      >
                        Github Client
                      </a>
                    </div>
                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Server site code link </p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://github.com/emonmorol/blood-buddies-server"
                        target="blank_"
                      >
                        Github Server
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl uppercase font-semibold mb-2">
                    Rimons IELTS
                  </h2>
                  <div>
                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Live Site Link </p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://rimons-ielts.web.app/"
                        target="blank_"
                      >
                        Rimons IELTS
                      </a>
                    </div>

                    <div className="flex mb-2 items-center">
                      <p className="text-xs">Client site code link</p>
                      <i class="mx-2 fa-solid fa-chevron-right"></i>
                      <a
                        className="text-primary font-bold"
                        href="https://github.com/emonmorol/rimons-ielts"
                        target="blank_"
                      >
                        Github Client
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border p-10 rounded-3xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-200">
              <h2 className="text-2xl uppercase font-semibold text-center mb-10">
                skills that i have
              </h2>
              <div className="grid grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
