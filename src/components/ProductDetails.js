import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import { Accordion } from "flowbite-react";
import ProductCard from "./ProductCard";
const ProductDetails = () => {
  const { id } = useParams();
  const [isZoom, setIsZoom] = useState(false);
  const images = [img, img2, img3, img4];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div id="product">
      <div className="grid md:grid-cols-2 gap-4 mx-5 mt-5">
        <div className="flex justify-center relative">
          {!isZoom && (
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
          )}
          <img
            className={` px-4  duration-300 rounded ${
              isZoom ? "scale-150" : "scale-100"
            }`}
            src={images[id]}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold text-3xl mb-3">
            Front Back Digital Print Premium Soft Cotton Sleeves
          </h1>
          <h3 className="font-bold text-xl mb-2">
            Availability: <span className="font-normal">In Stock</span>
          </h3>
          <h1 className="text-blue-700 font-bold text-3xl">TK 1500</h1>
          <span>Tax Included</span>
          <div className="mt-5">
            <label
              htmlFor="countries"
              className="block mb-2 text-xl font-semibold"
            >
              Size
            </label>
            <select
              id="sizes"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Choose a Size</option>
              <option value="sm">S-38</option>
              <option value="md">M-40</option>
              <option value="lg">L-44</option>
            </select>
          </div>
          <div className="my-3">
            <h1 className="mb-3 text-xl font-semibold">Quantity</h1>
            <div className="border-2 border-black flex w-2/4">
              <button className="w-[50px] text-2xl">+</button>
              <input
                className="w-[50px] text-center border-x-2 border-y-0 border-black"
                type="number"
              />
              <button className="w-[50px] text-2xl">-</button>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-full py-3 bg-blue-800 text-white font-semibold text-2xl mb-3"
            >
              <span className="text-center">ADD TO CART</span>
            </button>
            <button
              type="button"
              class="w-full py-3 bg-cyan-700 text-white font-semibold text-2xl"
            >
              <span className="text-center">BUY IT NOW</span>
            </button>
          </div>
          <div className="my-3">
            <h1 className="mb-3 text-xl font-semibold">Product Details</h1>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li className="text-transform: capitalize">
                TOP: Digital Print Premium Soft Cotton with sequence work.
              </li>
              <li className="text-transform: capitalize">
                DUPATTA: digital print premium soft cotton with pure dupatta.
              </li>
              <li className="text-transform: capitalize">
                TROUSER: 100% COTTON.
              </li>
              <li>Stitched</li>
            </ul>
          </div>
          <div>
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>Shipping & Returns</Accordion.Title>
                <Accordion.Content>
                  <h1 className="mb-3 tex-xl font-semibold">Delivery Time:</h1>
                  <p>
                    Inside Dhaka within 48 hours & outside Dhaka 07 working
                    days.
                  </p>
                  <h1 className="mb-3 mt-3 tex-xl font-semibold">
                    Return Policy:
                  </h1>
                  <p>
                    Kindly confirm your order once you are sure. Please check
                    your product in front of delivery man. We don't accept
                    returns unless the product is defective.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mx-2 mt-5">
        <h1 className="mb-3 text-xl font-semibold">You may also like</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          <ProductCard id="1" zoom={false} />
          <ProductCard id="0" zoom={true} />
          <ProductCard id="2" zoom={false} />
          <ProductCard id="3" zoom={false} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
