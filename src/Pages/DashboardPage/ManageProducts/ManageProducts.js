import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const {
    data: drills,
    isLoading,
    refetch,
  } = useQuery("all-drills", () => primaryAxios.get("/drill"));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-11/12 lg:w-full pt-5 lg:p-10 mb-40">
      <SectionTitle>Product Management</SectionTitle>
      <div class="overflow-x-scroll">
        <table class="table w-full">
          <thead className="bg-accent">
            <tr>
              <th className="">Serial No.</th>
              <th className="">Image</th>
              <th className="">Product Name</th>
              <th className="">Quantity (PCS)</th>
              <th className="text-center">Price (USD)</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {drills.data.map((drill, index) => (
              <ManageProductsRow
                key={drill._id}
                index={index}
                drill={drill}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
