import React from "react";
import primaryAxios from "../../../Api/primaryAxios";
import swal from "sweetalert";

const ManageProductsRow = ({ drill, index, refetch }) => {
  const { name, price, image, availableQuantity, _id } = drill;

  const handleDeleteProduct = (id) => {
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
          const { data } = await primaryAxios.delete(`/drill?id=${_id}`);
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
        <img className="w-20 rounded-full" src={image} alt="" />
      </td>
      <td className="">{name}</td>
      <td className="">{availableQuantity}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">
        <button
          className="btn btn-xs px-3  bg-red-100 hover:bg-red-200 text-red-500"
          onClick={() => handleDeleteProduct(_id)}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ManageProductsRow;
