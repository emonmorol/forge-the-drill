import React from "react";
import primaryAxios from "../../../Api/primaryAxios";
import swal from "sweetalert";
import { toast } from "react-toastify";

const ManageOrderRow = ({ order, index, refetch }) => {
  const {
    productName,
    quantity,
    totalPrice,
    _id,
    userEmail,
    userName,
    transactionId,
    status,
  } = order;

  const handleStatus = (id) => {
    if (status === "Pending" && transactionId) {
      swal({
        title: "Are you sure?",
        text: `
        You Want To Change The Status
             Pending to Shipped
        `,
        icon: "warning",
        className: "rounded-3xl",
        buttons: true,
        dangerMode: true,
      }).then((willShip) => {
        if (willShip) {
          (async () => {
            const { data } = await primaryAxios.patch(`/all-order/${id}`, {
              status: "Shipped",
            });
            if (data.success) {
              swal(`${productName} is shipped to ${userName}`, {
                icon: "success",
                className: "rounded-3xl",
              });
              refetch();
            }
          })();
        }
      });
    }
    if (status === "Shipped") {
      toast.error("This Order Is Already Shipped");
    }
    if (!transactionId) {
      toast.error("This Order Is Not Paid Yet");
    }
  };

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
    <tr>
      <td className="">{index + 1}</td>
      <td className="">{productName}</td>
      <td className="">{userName}</td>
      <td className="">{userEmail}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{totalPrice}</td>
      <td
        className={`text-center font-semibold text-sm uppercase ${
          transactionId ? "text-green-500" : "text-red-500"
        }`}
      >
        {transactionId ? "Paid" : "Unpaid"}
      </td>
      <td className="text-center">
        {status === "Pending" && transactionId ? (
          <button
            className="cursor-pointer text-sm py-1 px-8 rounded-lg uppercase font-semibold  bg-red-100 hover:bg-red-200 text-red-500"
            onClick={() => handleStatus(_id)}
          >
            {status}
          </button>
        ) : (
          <button
            className={`cursor-not-allowed text-sm py-1 px-8 rounded-lg uppercase font-semibold  ${
              status === "Shipped"
                ? "bg-green-100 hover:bg-green-200 text-green-500"
                : "bg-yellow-100 hover:bg-yellow-200 text-yellow-500"
            }`}
          >
            {status}
          </button>
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

export default ManageOrderRow;
