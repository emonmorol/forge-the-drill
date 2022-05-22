import React from "react";
import MainButton from "../../../Components/MainButton/MainButton";
import "./Drill.css";

const DrillCard = ({ drill }) => {
  const {
    // name,
    price,
    // image,
    minimumOrder,
    // description,
    availableQuantity,
  } = drill;

  return (
    <section class="drill-card card card-compact w-96 bg-teal-50 border-[0.5px] hover:shadow-2xl transition-all duration-300">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body drill-card-body pt-20">
        <h2 class="card-title py-2">Electric Drilling Machine</h2>
        <p>
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose?
        </p>
        <div className="flex justify-between">
          <p className="text-left">Available : {availableQuantity}</p>
          <p className="text-right">Minimunu Order : {minimumOrder}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-left text-2xl uppercase font-medium">
            price: <span className="font-bold">${price}</span>
          </p>
          <MainButton>Purchase</MainButton>
        </div>
      </div>
    </section>
  );
};

export default DrillCard;