import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, img } = product;

  return (
    <Link
      to={`/product/${id}`}
      className=" select-none bg-slate-100 hover:bg-slate-200   rounded shadow-sm p-2 cursor-pointer "
    >
      <div className=" relative overflow-hidden">
        {/* {!isZoom && (
          <button
            onClick={() => {
              setIsZoom(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute right-0 top-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          </button>
        )}
        {isZoom && (
          <button
            onClick={() => {
              setIsZoom(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 absolute z-40 right-0 top-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
              />
            </svg>
          </button>
        )} */}
        <img
          className={` w-auto h-40 mx-auto  duration-300 rounded`}
          src={img}
          alt=""
        />
      </div>
      <div>
        <p className="text-[10px] md:text-[12px] lg:text-[15px]">{title}</p>
        <div className="text-[12px] md:text-[12px] lg:text-[17px] font-normal  mt-2  ">
          <span className=" flex items-center justify-center">
            <span className="text-md md:text-xl lg:text-2xl font-bold text-blue-800">
              TK {price}
            </span>
          </span>
          {/* <Link
            to={`/product/${props.id}`}
            className="bg-blue-900 px-2 py-1 rounded text-white"
          >
            DETAILS
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
