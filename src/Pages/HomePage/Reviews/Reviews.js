import React from "react";
import { useQuery } from "react-query";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import Review from "./Review";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery("reviews", () => primaryAxios.get("/review"));

  if (isLoading) {
    return <Loading />;
  }

  console.log(reviews);

  return (
    <section className="bg-neutral p-20">
      <div className="min-h-[60vh]">
        <h2>This is review section</h2>
        <div className="grid grid-cols-4 gap-8">
          {reviews.data.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
