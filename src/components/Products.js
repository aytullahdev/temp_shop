import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/product/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        //console.log(data);
      });
  });
  return (
    <div className="py-2 px-2">
      <h1 className="text-md uppercase font-bold py-2">Women Three PCS</h1>
      {/* Card container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products &&
          products.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
      </div>
    </div>
  );
};

export default Products;
