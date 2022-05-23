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
    <div className="w-full px-10">
      <h2> My Orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead className="bg-accent">
            <tr>
              <th>Serial No.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity (PCS)</th>
              <th>Price (USD)</th>
              <th></th>
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
