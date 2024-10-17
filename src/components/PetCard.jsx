import React from "react";

const PetCard = ({ breed, price, age, image, gender }) => {
  return (
    <div className="w-full max-w-[280px] h-[378px] bg-white p-2 flex flex-col gap-2 text-navi-blue rounded-[12px] relative overflow-hidden">
      <div
        className="w-full h-48 bg-cover bg-center rounded-[12px]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h2 className="font-bold">{breed}</h2>
      <div>
        <h3 className="capitalize">
          Gene: {gender} • Age: {age} months
        </h3>
      </div>
      <p className="font-bold">{price} VND</p>
    </div>
  );
};

export default PetCard;
