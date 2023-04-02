import React from "react";
import img from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
const ProductCard = (props) => {
  const images = [img, img2, img3, img4];
  return (
    <div className="bg-white  rounded shadow-sm p-2 cursor-pointer ">
      <div className=" overflow-hidden">
        <img
          className=" w-auto h-40 mx-auto scale-150 hover:scale-100 duration-300 rounded"
          src={images[props.id]}
          alt=""
        />
      </div>
      <div>
        <p className="text-[10px]">
          <span className="font-semibold">FRONT BACK </span>Digital Print
          Premium Soft cotton SLEEVES
        </p>
        <div className="grid grid-cols-2  text-[10px] font-normal flex-wrap mt-2  ">
          {/* <span className="">
            <span className="font-semibold ">DUPATTA:</span> Soft cotton
          </span> */}
          <span className="">
            <span className="font-semibold ">Price: </span>
            {"  "}
            <span className=" bg-gray-500  text-white rounded p-1">1500TK</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
