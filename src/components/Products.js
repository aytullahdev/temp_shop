import React from "react";

import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className="py-2 px-2">
      <h1 className="text-md uppercase font-bold py-2">Women Three PCS</h1>
      {/* Card container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        <ProductCard id="1" zoom={false} />
        <ProductCard id="0" zoom={true} />
        <ProductCard id="2" zoom={false} />
        <ProductCard id="3" zoom={false} />
        <ProductCard id="1" zoom={true} />
        <ProductCard id="0" zoom={false} />
        <ProductCard id="2" zoom={true} />
        <ProductCard id="3" zoom={false} />
      </div>
    </div>
  );
};

export default Products;
