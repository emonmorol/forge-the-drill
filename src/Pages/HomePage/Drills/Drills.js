import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
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
        <div className="mx-auto w-full">
          <h1 className="section-title">We MenuFacture</h1>
        </div>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <div className="grid grid-cols-3 gap-y-8">
            {drills?.data.map((drill) => (
              <DrillCard key={drill._id} drill={drill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drills;
