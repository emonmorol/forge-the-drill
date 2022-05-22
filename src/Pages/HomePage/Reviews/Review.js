import React from "react";

const Review = ({ review }) => {
  const { name, image, ratings, reviewContent } = review;
  return (
    <div class="flex flex-col bg-base-100 hover:shadow-2xl transition-all duration-300 rounded-2xl border-[0.1px] p-6">
      <div className="flex gap-3 mb-5">
        <div class="avatar">
          <div class="w-20 h-20 rounded-full border-4 border-primary">
            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
          </div>
        </div>
        <h2 class="card-title">{name}</h2>
      </div>
      <p>{reviewContent.slice(0, 101)}</p>
      <p className="text-right">
        Ratings : {ratings} <i class="fa-solid fa-star text-primary"></i>
      </p>
    </div>
  );
};

export default Review;
