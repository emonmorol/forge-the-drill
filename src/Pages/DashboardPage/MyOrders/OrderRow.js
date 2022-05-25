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
    status,
  } = order;

  const handleCancelOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Cancelled,This Process Can't Be Undone",
      icon: "warning",
      className: "rounded-3xl",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const { data } = await primaryAxios.delete(`/order?id=${_id}`);
          if (data.deletedCount > 0) {
            swal("Order Cancelled", {
              icon: "success",
              className: "rounded-3xl",
            });

            refetch();
          }
        })();
      } else {
        swal("Appreciate Your Not Cancelling The order", {
          className: "rounded-3xl",
        });
      }
    });
  };

  return (
    <tr className="px-5">
      <td className="">{index + 1}</td>
      <td className="">
        <img className="w-20 rounded-full" src={productImage} alt="" />
      </td>
      <td className="">{productName}</td>
      <td className="">{quantity}</td>
      <td className="text-center">{totalPrice}</td>
      <td className="text-center">
        {" "}
        {transactionId ? transactionId : "Unpaid"}
      </td>

      <td className="text-center">{status}</td>
      <td className="text-center">
        {transactionId ? (
          <button className="cursor-not-allowed text-sm py-1 px-8 rounded-lg uppercase font-semibold bg-green-100 hover:bg-green-200 text-green-500">
            Paid
          </button>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="cursor-pointer text-sm py-1 px-4 rounded-lg uppercase font-semibold  bg-blue-100 hover:bg-blue-200 text-blue-500"
          >
            Payment
          </Link>
        )}
      </td>
      <td className="text-center">
        <button
          disabled={transactionId}
          className="btn btn-xs px-3  bg-red-100 hover:bg-red-200 text-red-500"
          onClick={() => handleCancelOrder(_id)}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
