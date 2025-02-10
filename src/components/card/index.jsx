import React from "react";

const Card = ({ item }) => {
  return (
    <div key={item.id} className="border text-center font-bold">
      <h3 className="my-[10px]">{item.title}</h3>
      <img className="w-full" src={item.images[0]} alt="" />
    </div>
  );
};

export default Card;
