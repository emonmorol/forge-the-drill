import React from "react";
import primaryAxios from "../../../Api/primaryAxios";
import swal from "sweetalert";

const OrderRow = ({ order, index, refetch }) => {
  const { productName, productImage, quantity, totalPrice, _id } = order;

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
      <th>{index + 1}</th>
      <td>
        <img className="w-20 rounded-full" src={productImage} alt="" />
      </td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td className="flex gap-2 justify-center items-center h-full py-10">
        <button className="bg-blue-200 px-5 py-1 rounded-xl font-semibold text-blue-500">
          Pay
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-200 px-5 py-1 rounded-xl font-semibold text-red-500"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
