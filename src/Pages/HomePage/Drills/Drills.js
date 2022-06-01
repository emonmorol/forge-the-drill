import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import DrillCard from "./DrillCard";

const Drills = () => {
  const {
    data: drills,
    isLoading,
    error,
  } = useQuery("all-drills", () => primaryAxios.get("/drill"));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="section-bg bg-white">
      <div className="z-30 max-w-7xl mx-auto py-20">
        <SectionTitle>We Manufacture</SectionTitle>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8">
            {[...drills?.data]
              .reverse()
              .slice(0, 3)
              .map((drill) => (
                <DrillCard key={drill._id} drill={drill} />
              ))}
          </div>
        )}
        <Link
          className="w-3/4  lg:w-1/3 mx-auto flex justify-center mt-10 button rounded-full overflow-hidden"
          to="/all-drills"
        >
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default Drills;
