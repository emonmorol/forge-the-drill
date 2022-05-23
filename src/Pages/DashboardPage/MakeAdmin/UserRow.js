import React from "react";
import { toast } from "react-toastify";
import primaryAxios from "../../../Api/primaryAxios";

const UserRow = ({ user, refetch, index }) => {
  const { name, email, role, _id } = user;

  const handleMakeAdmin = (id) => {
    (async () => {
      const { data } = await primaryAxios.put(`/user-role?id=${id}`, {
        role: "admin",
      });
      if (data.success) {
        toast.success(`${name} Is Now Admin`);
        refetch();
      }
    })();
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role ? "Admin" : "User"}</td>
      <td>
        <button
          onClick={() => handleMakeAdmin(_id)}
          className="btn btn-xs btn-outline btn-primary hover:text-white rounded-full"
          disabled={role}
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
