import "./App.css";
import Catagory from "./components/Catagory";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catagory />
      <Products />
    </div>
  );
}

export default App;
