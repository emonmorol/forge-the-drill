import React from "react";

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

  // const handleStatus = (id) => {

  // }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{productName}</td>
      <td className="text-center">{userName}</td>
      <td className="text-center">{userEmail}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{totalPrice}</td>
      <td className="text-center">
        <button>{status}</button>
      </td>
      <td className="text-center">{transactionId ? "Paid" : "Unpaid"}</td>
    </tr>
  );
};

export default ManageOrderRow;
