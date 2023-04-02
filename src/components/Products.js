import React from "react";

import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className="py-2 px-2">
      <h1 className="text-md uppercase font-bold py-2">Women Three PCS</h1>
      {/* Card container */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
        <ProductCard id="1" />
        <ProductCard id="0" />
        <ProductCard id="2" />
        <ProductCard id="3" />
        <ProductCard id="1" />
        <ProductCard id="0" />
        <ProductCard id="2" />
        <ProductCard id="3" />
      </div>
    </div>
  );
};

export default Products;
