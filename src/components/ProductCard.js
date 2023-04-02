import React from "react";
import img from "../img/1.png";
const ProductCard = () => {
  return (
    <div className="bg-gray-100 rounded p-5 hover:bg-gray-200 ">
      <div className=" overflow-hidden">
        <img
          className=" h-60 mx-auto hover:scale-150 duration-300"
          src={img}
          alt=""
        />
      </div>
      <div>
        <p className="text-sm">
          <span className="font-semibold">FRONT BACK </span>Digital Print
          Premium Soft cotton SLEEVES
        </p>
        <div className="grid grid-cols-2 text-[10px] flex-wrap py-3 gap-1 ">
          <span className=" bg-white/80 hover:bg-green-500 hover:text-white backdrop-blur-lg rounded  p-1">
            <span className="font-bold ">Dupatta:</span> Soft cotton
          </span>
          <span className=" bg-white/80 backdrop-blur-lg rounded p-1">
            <span className="font-bold">TROUSER:</span> Soft cotton
          </span>
        </div>
        <div className="flex">
          <p>
            <span className="font-semibold">Price:</span> 1500 tk
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
