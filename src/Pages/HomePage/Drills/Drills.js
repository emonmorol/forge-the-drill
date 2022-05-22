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
    <div className="min-h-[100vh] max-w-7xl mx-auto">
      <h2>We MenuFacture</h2>
      <div className="grid grid-cols-3 gap-y-8">
        {drills?.data.map((drill) => (
          <DrillCard key={drill._id} drill={drill} />
        ))}
      </div>
    </div>
  );
};

export default Drills;
