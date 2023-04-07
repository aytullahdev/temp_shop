import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Allproduct = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/product/`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        //console.log(data);
      });
  });
  const deleteProduct = (id) => {
    const flag = window.confirm("Are you sure?");
    if (flag) {
      try {
        toast.promise(
          axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}/api/product/delete`,
            data: { id },
          }).then((res) => {
            //console.log(res.data);
            if (res.data && res.data?.fileId && res.data?.affectedRows > 0) {
              toast.success("Deleted successfully");
            }
          }),
          {
            pending: "File is Uploading",
          }
        );
      } catch (error) {}
    }
  };
  return (
    <>
      {" "}
      {products && (
        <div className="flex flex-col space-y-5 w-full mx-1 lg:w-2/3 lg:mx-auto py-5">
          {products.map((e) => {
            return (
              <div
                className="shadow grid grid-col-1 justify-center  lg:grid-cols-3"
                key={e.id}
              >
                <div>
                  <img src={e.img} className="h-20 w-20" />
                </div>
                <div>
                  <h1>{e.title}</h1>
                  <p>{e.price}TK</p>
                  <p>{e.stock}</p>
                </div>
                <div className="flex space-x-2 items-center ">
                  <Link
                    to={`/editproduct/${e.id}`}
                    className="px-5 py-2 bg-green-400 text-white rounded "
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/product/${e.id}`}
                    className="px-5 py-2 bg-orange-400 text-white rounded "
                  >
                    View
                  </Link>
                  <Link
                    onClick={() => deleteProduct(e.id)}
                    className="px-5 py-2 bg-red-500 text-white rounded "
                  >
                    Delete
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Allproduct;
