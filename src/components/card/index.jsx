import React from "react";

const Card = ({ item }) => {
  return (
    <div key={item.id} className="border text-center rounded-[15px] font-bold h-[300px] ">
      <div className="  h-[200px] overflow-hidden">
      <img className="w-[100%] h-[100%] border-b " src={item.images[0]} alt="" />  
      </div>
        
      <h3 className="my-[10px]">{item.title}</h3>
      <h3 className="my-[10px] bg-amber-300 w-[100px] m-auto">{item.price}$</h3>
   
    </div>
  );
};

export default Card;
