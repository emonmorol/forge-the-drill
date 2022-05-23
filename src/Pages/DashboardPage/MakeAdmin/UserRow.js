import React from "react";

const UserRow = ({ user, refetch, index }) => {
  const { name, email, role } = user;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role ? role : "User"}</td>
      <td>
        <button className="btn btn-xs btn-outline btn-primary hover:text-white rounded-full">
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
