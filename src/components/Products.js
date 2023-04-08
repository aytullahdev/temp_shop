import React from "react";

import ProductCard from "./ProductCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="py-2 px-2">
      <h1 className="text-md uppercase font-bold py-2">
        Best Women Collection
      </h1>
      {/* Card container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <ProductCard id="1" zoom={false} />
        <ProductCard id="0" zoom={true} />
        <ProductCard id="2" zoom={false} />
        <ProductCard id="3" zoom={false} />
        <ProductCard id="1" zoom={true} />
        <ProductCard id="0" zoom={false} />
        <ProductCard id="2" zoom={true} />
        <ProductCard id="3" zoom={false} />
      </div>
      <Link to="/category/women">
        <Button className="my-3 mx-auto" gradientDuoTone="purpleToBlue">View All</Button>
      </Link>
    </div>
  );
};

export default Products;
