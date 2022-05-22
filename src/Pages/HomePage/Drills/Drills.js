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
    <div className="section-bg">
      <div className=" max-w-7xl mx-auto py-20">
        <h2>We MenuFacture</h2>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <div className="grid grid-cols-3 gap-y-8">
            {drills?.data.slice(0, 3).map((drill) => (
              <DrillCard key={drill._id} drill={drill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drills;
