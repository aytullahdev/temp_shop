import React from "react";

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
      </div>
    </div>
  );
};

export default Catagory;
