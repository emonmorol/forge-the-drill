import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("all-orders", () => primaryAxios.get(`/all-order`));
  console.log(orders);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full px-10">
      <h2>This is manage all orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead className="bg-accent">
            <tr>
              <th className="text-center">Serial No.</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">User Name</th>
              <th className="text-center">User Email</th>
              <th className="text-center">Quantity (PCS)</th>
              <th className="text-center">Price (USD)</th>
              <th className="text-center">Status</th>
              <th className="text-center">Payment</th>
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
