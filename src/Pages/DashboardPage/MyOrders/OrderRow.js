import React from "react";

const OrderRow = ({ order, index, refetch }) => {
  const { productName, productImage, quantity, totalPrice } = order;
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
        <button className="bg-red-200 px-5 py-1 rounded-xl font-semibold text-red-500">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
