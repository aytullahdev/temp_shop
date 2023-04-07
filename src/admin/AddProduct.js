import React from "react";
import TextEditor from "./TextEditor";

const setDescription = (data) => {};
const AddProduct = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="w-full lg:w-1/2 mx-auto flex flex-col space-y-4">
        <h1 className="text-xl lg:text-3xl font-bold text-center py-4">
          ADD PRODUCT
        </h1>
        <div className="flex flex-col space-y-2">
          <label for="title" className="text-sm text-gray-500">
            Title
          </label>
          <input
            type="text"
            className="rounded  border-1 outline-none border-gray-200"
            placeholder="Enter Product Tittle..."
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label for="title" className="text-sm text-gray-500">
            Description
          </label>
          <TextEditor setDescription={setDescription} />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
