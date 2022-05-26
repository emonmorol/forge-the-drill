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
          {[...reviews.data]
            .reverse()
            .slice(0, 8)
            .map((review) => (
              <Review key={review._id} review={review} />
            ))}
        </div>
        <Link
          className="w-1/4 mx-auto flex justify-center mt-10 button rounded-full overflow-hidden"
          to="/dashboard/add-review"
        >
          Say Something About Us
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
