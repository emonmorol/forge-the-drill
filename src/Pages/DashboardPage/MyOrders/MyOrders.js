import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Components/Loading/Loading";
import OrderRow from "./OrderRow";

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
    <div className=" w-11/12 lg:w-full lg:px-10">
      <h2> My Orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
