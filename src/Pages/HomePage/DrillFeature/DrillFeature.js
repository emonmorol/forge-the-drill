import React from "react";
import swal from "sweetalert";

const DrillFeature = () => {
  return (
    <div className="bg-neutral py-20">
      <div className="flex justify-center items-center max-w-7xl mx-auto gap-20">
        <div className="flex-1">
          <h2 className="text-3xl font-bold uppercase my-6">
            Our Product Feature
          </h2>
          <p>
            From simple fixings to professional use at home, a drilling machine
            allows you to perform all your projects with high efficiency. With
            the current drastic improvements in technology, drilling machines
            come with advanced features. These features are designed to make
            your project simple and easy.
          </p>
        </div>
        <div className="flex-1 flex items-center gap-10 mx-auto">
          <div
            onClick={() => {
              swal(
                "The chuck is that section that holds the different bits of a drilling machine together. You have the freedom to choose from various sizes and types of chucks. There are two types of drill chucks: keyed and keyless chucks. Nonetheless, all the modern drills have keyless chucks. Hence, gone are the issues of lost key if you want to change the bit.",
                {
                  className: "rounded-3xl",
                }
              );
            }}
            className="w-32 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#29cae4] px-4 py-5 text-white border-b-4 border-[#20b8d1] h-44 rounded-2xl shadow-2xl shadow-gray-300"
          >
            <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#20b8d1] text-white">
              <i class="fa-solid fa-thumbtack"></i>
            </span>
            <div className="mt-7">
              <p className="text-sm">Chuck</p>
              <p className="text-[10px] mt-2">Tab the box to see details</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div
              onClick={() => {
                swal(
                  "A cordless drill is the best option for you if you are that kind of person who intends to try the do-it-yourself project. It is lightweight, easy to use and safe to be used almost anywhere in your home. Nonetheless, if you are that experienced person, it is advisable to use a corded power drill. A corded power drill will give you an additional authority and spin. Furthermore, cordless drills are a perfect fit for the hard-to-reach places in your home. Therefore, it is recommended to choose a drill concerning the tasks you intend to perform.",
                  {
                    className: "rounded-3xl",
                  }
                );
              }}
              className="w-32 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#3d30ba] px-4 py-5 text-white border-b-4 border-[#3428a7] h-44 rounded-2xl shadow-2xl shadow-gray-300"
            >
              <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#3428a7] text-white">
                <i class="fa-brands fa-servicestack"></i>
              </span>
              <div className="mt-7">
                <p className="text-sm">Corded Drills</p>
                <p className="text-[10px] mt-2">Tab the box to see details</p>
              </div>
            </div>
            <div
              onClick={() => {
                swal(
                  "The reverse feature is designed to help you remove the bits that get stuck while drilling. All keyless drills have a reverse feature by default since there is no other means that you can use to get your drilling machine bit out. Therefore, when buying a keyed drill, it is advisable to be more careful on this crucial feature.",
                  {
                    className: "rounded-3xl",
                  }
                );
              }}
              className="w-32 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#c9d4e3] px-4 py-5 text-white border-b-4 border-[#b8c4d6] h-44 rounded-2xl shadow-2xl shadow-gray-300"
            >
              <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#b8c4d6] text-white">
                <i class="fa-solid fa-rotate"></i>
              </span>
              <div className="mt-7">
                <p className="text-sm">Reverse</p>
                <p className="text-[10px] mt-2">Tab the box to see details</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              swal(
                "Variable speed is an essential feature especially if you intend to use your drilling machine for driving screws. Nonetheless, even if you will not be using the drilling machine for driving screws, having variable speed will play a great role in cleaning the drilled holes. Different materials require different bit speeds, hence the necessity for a variable speed feature.",
                {
                  className: "rounded-3xl",
                }
              );
            }}
            className="w-32 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#4c5071] px-4 py-5 text-white border-b-4 border-[#3b3f61] h-44 rounded-2xl shadow-2xl shadow-gray-300"
          >
            <span className="text-xl px-2 py-1 rounded-lg mt-5 bg-[#3b3f61] text-white">
              <i class="fa-solid fa-dragon"></i>
            </span>
            <div className="mt-7">
              <p className="text-sm">Variable speed</p>
              <p className="text-[10px] mt-2">Tab the box to see details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillFeature;