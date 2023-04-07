import "./App.css";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import AddProduct from "./admin/AddProduct";
import UploadImage from "./admin/UploadImage";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./admin/EditProduct";
import Allproduct from "./admin/Allproduct";
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    toast.error(err.response.data.message);
  }
);
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/fileupload" element={<UploadImage />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/allproduct" element={<Allproduct />} />
        <Route
          path="*"
          element={
            <div className="  py-10 text-center text-3xl text-black">
              Not Found
            </div>
          }
        />
      </Routes>

      <ChatBot></ChatBot>
      <ToastContainer />
    </div>
  );
}

export default App;
