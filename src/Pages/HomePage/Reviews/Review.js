import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";

const Review = ({ review }) => {
  const { name, ratings, reviewContent, email } = review;
  const { data: user, isLoading } = useQuery(["userProfile", email], () =>
    primaryAxios.get(`/user-role?email=${email}`)
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col bg-base-100 hover:shadow-2xl transition-all duration-300 rounded-2xl border-[0.1px] p-6 overflow-hidden">
      <div className="flex items-center gap-3 mb-5">
        <div className="avatar placeholder">
          <div className="bg-gray-200 text-gray-600 rounded-full w-16">
            <img
              className="h-auto w-full mx-auto"
              src={`${
                user?.data?.image
                  ? user?.data?.image
                  : "https://i.ibb.co/T1D3tqN/images.png"
              }`}
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="overflow-hidden">{reviewContent}</p>
        <p className="text-right">
          Ratings : {ratings} <i className="fa-solid fa-star text-primary"></i>
        </p>
      </div>
    </div>
  );
};

export default Review;
