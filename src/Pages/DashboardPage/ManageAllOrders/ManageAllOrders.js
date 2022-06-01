import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("all-orders", () => primaryAxios.get(`/all-order`));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-11/12 lg:w-full pt-5 lg:p-10 mb-40">
      <SectionTitle>manage all product</SectionTitle>
      <div class="overflow-x-scroll">
        <table class="table w-full">
          <thead className="bg-accent">
            <tr>
              <th className="">Serial No.</th>
              <th className="">Product Name</th>
              <th className="">User Name</th>
              <th className="">User Email</th>
              <th className="text-center">Quantity (PCS)</th>
              <th className="text-center">Price (USD)</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
