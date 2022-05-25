import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../../../Components/MainButton/MainButton";
import "./Drill.css";

const DrillCard = ({ drill }) => {
  const {
    name,
    price,
    image,
    minimumOrder,
    description,
    availableQuantity,
    _id,
  } = drill;

  return (
    <section class="drill-card card card-compact w-96 bg-teal-50 border-[0.5px] hover:shadow-2xl transition-all duration-300   mx-auto">
      <figure className=" hover:rotate-6  transition-all duration-300">
        <img src={image} alt="Shoes" />
      </figure>
      <div class="card-body drill-card-body pt-20">
        <h2 class="card-title py-2">{name}</h2>
        <p>{description.slice(0, 120)}...</p>
        <div className="flex justify-between">
          <p className="text-left">Available : {availableQuantity}</p>
          <p className="text-right">Minimunu Order : {minimumOrder}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-left text-2xl uppercase font-medium">
            price: <span className="font-bold">${price}</span>
          </p>
          <Link to={`/purchase/${_id}`}>
            <MainButton>Purchase</MainButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DrillCard;
