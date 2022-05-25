import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import primaryAxios from "../../../Api/primaryAxios";
import Loading from "../../../Components/Loading/Loading";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    primaryAxios.get("/review")
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-neutral p-5 lg:p-20">
      <div className="min-h-[60vh] mx-auto">
        <SectionTitle>Our Clients View</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-3 lg:gap-8">
          {reviews.data.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Link to="/dashboard/add-review" className="button w-72 text-center">
            Say Something About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
