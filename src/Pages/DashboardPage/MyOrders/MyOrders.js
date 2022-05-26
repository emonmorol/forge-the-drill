import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Components/Loading/Loading";
import OrderRow from "./OrderRow";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", user?.email], () =>
    primaryAxios.get(`/order?email=${user?.email}`)
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" w-11/12 lg:w-full pt-5 lg:p-10 mb-40">
      <SectionTitle>
        hi <span className="text-green-500">{user?.displayName}</span>, Here is
        your orders
      </SectionTitle>
      <div className="overflow-x-scroll">
        <table className="table w-full">
          <thead className="bg-accent">
            <tr>
              <th className="">Serial No.</th>
              <th className="">Image</th>
              <th className="">Product Name</th>
              <th className="">Quantity (PCS)</th>
              <th className="text-center">Price (USD)</th>
              <th className="text-center">Transaction ID</th>
              <th className="text-center">Status</th>
              <th className="text-center">Payment</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.data.map((order, index) => (
              <OrderRow
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

export default MyOrders;
