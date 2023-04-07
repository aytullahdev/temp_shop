import React from "react";
import { Link } from "react-router-dom";

const Catagory = () => {
  return (
    <div className="px-2">
      <h1 className="text-lg font-bold py-5 uppercase ">Catagories</h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center items-center p-5 text-white rounded">
          MENS
        </div>
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 flex justify-center items-center p-5 text-white rounded">
          WOMENS
        </div>
        <Link
          to="/addproduct"
          className="bg-gradient-to-r from-fuchsia-600 to-pink-600 flex justify-center items-center p-5 text-white rounded"
        >
          ADD PRODUCT
        </Link>
        <Link
          to="/allproduct"
          className="bg-gradient-to-r from-fuchsia-600 to-pink-600 flex justify-center items-center p-5 text-white rounded"
        >
          ALL PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default Catagory;
