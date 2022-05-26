import React, { useState } from "react";
import { toast } from "react-toastify";
import primaryAxios from "../../../Api/primaryAxios";

const UserRow = ({ user, refetch, index }) => {
  const { name, email, role, _id } = user;
  const [isLoading, setIsLoading] = useState(null);

  const handleMakeAdmin = (id) => {
    setIsLoading(true);
    (async () => {
      const { data } = await primaryAxios.put(`/user-role?id=${id}`, {
        role: "admin",
      });
      if (data.success) {
        refetch();
        toast.success(`${name} Is Now Admin`);
        setIsLoading(false);
      }
    })();
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td className="text-center">{role ? "Admin" : "User"}</td>
      <td className="text-center">
        <button
          onClick={() => handleMakeAdmin(_id)}
          className={`btn btn-xs btn-outline btn-primary hover:text-white rounded-full ${
            isLoading && "loading"
          }`}
          disabled={role}
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
