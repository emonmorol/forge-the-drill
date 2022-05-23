import React from "react";
import primaryAxios from "../../../Api/primaryAxios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const OrderRow = ({ order, index, refetch }) => {
  const {
    productName,
    productImage,
    quantity,
    totalPrice,
    _id,
    transactionId,
  } = order;
  console.log(transactionId);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Cancelled,This Process Can't Be Undone",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await primaryAxios.delete(`/order?id=${_id}`);
          if (data.deletedCount > 0) {
            swal("Order Cancelled", {
              icon: "success",
            });

            refetch();
          }
        })();
      } else {
        swal("Appreciate Your Not Cancelling The order");
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">
        <img className="w-20 rounded-full" src={productImage} alt="" />
      </td>
      <td className="text-center">{productName}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{totalPrice}</td>
      <td className="text-center">
        {" "}
        {transactionId ? transactionId : "Unpaid"}
      </td>
      <td className="flex gap-2 justify-center items-center h-full py-10">
        {transactionId ? (
          <button className="bg-green-200 px-5 py-1 rounded-xl font-semibold text-green-500">
            Paid
          </button>
        ) : (
          <>
            <Link
              to={`/dashboard/payment/${_id}`}
              className="bg-blue-200 px-5 py-1 rounded-xl font-semibold text-blue-500"
            >
              Payment
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-200 px-5 py-1 rounded-xl font-semibold text-red-500"
            >
              Cancel
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
