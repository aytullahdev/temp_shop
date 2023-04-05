import "./App.css";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
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
    </div>
  );
}

export default App;
