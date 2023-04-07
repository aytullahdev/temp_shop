import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TextEditor from "./TextEditor";
import UploadImage from "./UploadImage";
const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    category_id: "1",
    img: "",
    img2: "",
    img3: "",
    sku: "",
    note: "",
    stock: "",
  });
  const [category, setCategory] = useState(null);
  const setDescription = (data) => {
    setProduct((prev) => ({ ...prev, description: data }));
  };
  const setCoverImg = (link) => {
    setProduct((prev) => ({ ...prev, img: link }));
  };
  const set2ndImg = (link) => {
    setProduct((prev) => ({ ...prev, img2: link }));
  };
  const set3rdImg = (link) => {
    setProduct((prev) => ({ ...prev, img3: link }));
  };
  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_API_URL}/api/product/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          //console.log(data);
        });
      fetch(`${process.env.REACT_APP_API_URL}/api/product/category`)
        .then((response) => response.json())
        .then((data) => {
          setCategory(data);
          // console.log(data);
        });
      return () => {};
    }
  }, [id]);
  const onUpdate = () => {
    //console.log(product);
    try {
      toast.promise(
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/api/product/update`,
          data: product,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          //   console.log(res.data);
          if (res.data && res.data?.affectedRows) {
            toast.success(res.data.message);
          }
        }),
        {
          pending: "File is Uploading",
        }
      );
    } catch (error) {}
  };
  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const {
    title,
    price,
    category_id,
    description,
    img,
    stock,
    sku,
    note,
    img2,
    img3,
  } = product;
  return (
    <>
      {product && (
        <div className="px-2 lg:px-5">
          <div className="w-full lg:w-1/2 mx-auto flex flex-col space-y-4">
            <h1 className="text-xl lg:text-3xl font-bold text-center py-4">
              UPDATE PRODUCT
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-col space-y-2">
                <label for="title" className="text-sm text-gray-500">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  name="title"
                  onChange={handleChange}
                  className="rounded  border-1 outline-none border-gray-200"
                  placeholder="Enter Product Tittle..."
                />
                <label for="title" className="text-sm text-gray-500">
                  Note
                </label>
                <input
                  type="text"
                  value={note}
                  name="note"
                  onChange={handleChange}
                  className="rounded  border-1 outline-none border-gray-200"
                  placeholder="Note.."
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500">Price</label>
                <input
                  type="number"
                  value={price}
                  name="price"
                  onChange={handleChange}
                  className="rounded  border-1 outline-none border-gray-200"
                  placeholder="Enter Product Price..."
                />
                <div className="flex flex-col space-y-2">
                  <label className="text-sm text-gray-500">SKU</label>
                  <input
                    type="text"
                    value={sku}
                    name="sku"
                    onChange={handleChange}
                    className="rounded  border-1 outline-none border-gray-200"
                    placeholder="Enter Product Code..."
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-col space-y-2">
                <label for="title" className="text-sm text-gray-500">
                  Category
                </label>
                <select
                  name="category_id"
                  className="rounded  border-1 outline-none border-gray-200"
                  onChange={handleChange}
                >
                  {category &&
                    category.map((e) => {
                      return (
                        <option value={e.name} selected={e.name == category_id}>
                          {e.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-gray-500">Stock</label>
                <select
                  name="stock"
                  className="rounded  border-1 outline-none border-gray-200"
                  onChange={handleChange}
                >
                  <option value="In" selected={"In" == stock}>
                    IN STOCK
                  </option>
                  <option value="Out" selected={"Out" == stock}>
                    STOCK OUT
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="flex flex-col space-y-2 ">
                <label className="text-sm text-gray-500">Cover Image</label>
                <UploadImage setImg={setCoverImg} imgLink={img} />
              </div>
              <div className="flex flex-col space-y-2 ">
                <label className="text-sm text-gray-500">2nd Image</label>
                <UploadImage setImg={set2ndImg} imgLink={img2} />
              </div>
              <div className="flex flex-col space-y-2 ">
                <label className="text-sm text-gray-500">3rd Image</label>
                <UploadImage setImg={set3rdImg} imgLink={img3} />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-500">Description</label>
              <TextEditor value={description} setDescription={setDescription} />
            </div>
            <div className="flex flex-row justify-center space-x-5">
              <button
                onClick={() => {
                  window.confirm("Are You Sure") && onUpdate();
                }}
                className="px-10 py-2 bg-orange-500 text-white rounded"
              >
                Update
              </button>
              <button className="px-10 py-2 bg-red-600 text-white rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
