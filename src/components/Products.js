import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

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
      <h1 className="text-md uppercase font-bold py-2">
        Best Women Collection
      </h1>
      {/* Card container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products &&
          products.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
      </div>
      <Link to="/category/women">
        <Button className="my-3 mx-auto" gradientDuoTone="purpleToBlue">
          View All
        </Button>
      </Link>
    </div>
  );
};

export default Products;
