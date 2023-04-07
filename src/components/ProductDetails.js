import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "flowbite-react";
import parser from "html-react-parser";

const ProductDetails = () => {
  const { id } = useParams();
  const [isZoom, setIsZoom] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0);
      fetch(`${process.env.REACT_APP_API_URL}/api/product/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          console.log(data);
        });
      return () => {};
    }
  }, [id]);
  const { title, price, category_id, description, img, stock } = product;
  return (
    <div id="product">
      <div className="grid md:grid-cols-2 gap-4 mx-5 mt-5">
        <div className="flex justify-center relative  h-fit overflow-hidden">
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
            src={img}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="font-semibold text-3xl mb-3">{title}</h1>
          <h3 className="font-bold text-xl mb-2">
            Availability: <span className="font-normal">{stock}</span>
          </h3>
          <h1 className="text-blue-700 font-bold text-3xl">TK {price}</h1>
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
      <div className="mx-2 lg:mx-5">
        <div className="my-3 ">
          <h1 className="mb-3 text-xl font-semibold">Product Details</h1>
          <div className="jodit-wysiwyg prose">
            {description && <div>{parser(description)}</div>}
          </div>
          <div>
            <h1 className="text-xl lg:3xl  font-bold py-4">
              Shipping & Returns
            </h1>
            <h1 className="mb-3 tex-xl font-semibold">Delivery Time:</h1>
            <p>Inside Dhaka within 48 hours & outside Dhaka 07 working days.</p>
            <h1 className="mb-3 mt-3 tex-xl font-semibold">Return Policy:</h1>
            <p>
              Kindly confirm your order once you are sure. Please check your
              product in front of delivery man. We don't accept returns unless
              the product is defective.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-2 lg:mx-5 mt-5">
        <h1 className="mb-3 text-xl font-semibold">You may also like</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
