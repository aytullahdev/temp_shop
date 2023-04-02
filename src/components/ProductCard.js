import React from "react";
import img from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
const ProductCard = (props) => {
  const images = [img, img2, img3, img4];
  return (
    <div className="bg-gray-100 rounded p-2 hover:bg-gray-200 ">
      <div className=" overflow-hidden">
        <img
          className=" w-auto h-40 mx-auto hover:scale-150 duration-300 rounded"
          src={images[props.id]}
          alt=""
        />
      </div>
      <div>
        <p className="text-[12px] font-semibold">
          <span className="font-bold">FRONT BACK </span>Digital Print
          Premium Soft cotton SLEEVES
        </p>
        <div className="grid grid-cols-2 text-[8px] flex-wrap py-3 gap-1 ">
          <span className=" bg-white/80 hover:bg-green-500 hover:text-white backdrop-blur-lg rounded  p-1">
            <span className="font-bold ">Dupatta:</span> Soft cotton
          </span>
          <span className=" bg-white/80 backdrop-blur-lg rounded p-1 hover:bg-green-500 hover:text-white">
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
