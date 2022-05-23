import React from "react";

const Review = ({ review }) => {
  const { name, image, ratings, reviewContent, email } = review;
  return (
    <div class="flex flex-col bg-base-100 hover:shadow-2xl transition-all duration-300 rounded-2xl border-[0.1px] p-6 overflow-hidden">
      <div className="flex items-center gap-3 mb-5">
        <div class="avatar placeholder">
          <div class="bg-gray-200 text-gray-600 rounded-full w-16">
            <span class="text-3xl uppercase font-extrabold">
              {name.slice(0, 1)}
            </span>
          </div>
        </div>
        <div>
          <h2 class="card-title">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
      </div>
      <p className="overflow-hidden">{reviewContent}</p>
      <p className="text-right">
        Ratings : {ratings} <i class="fa-solid fa-star text-primary"></i>
      </p>
    </div>
  );
};

export default Review;
