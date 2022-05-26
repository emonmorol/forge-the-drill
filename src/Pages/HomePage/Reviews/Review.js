import React from "react";

const Review = ({ review }) => {
  const { name, image, ratings, reviewContent, email } = review;
  return (
    <div className="flex flex-col bg-base-100 hover:shadow-2xl transition-all duration-300 rounded-2xl border-[0.1px] p-6 overflow-hidden">
      <div className="flex items-center gap-3 mb-5">
        <div className="avatar placeholder">
          <div className="bg-gray-200 text-gray-600 rounded-full w-16">
            <span className="text-3xl uppercase font-extrabold">
              {name.slice(0, 1)}
            </span>
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
      </div>
      <p className="overflow-hidden">{reviewContent}</p>
      <p className="text-right">
        Ratings : {ratings} <i className="fa-solid fa-star text-primary"></i>
      </p>
    </div>
  );
};

export default Review;
