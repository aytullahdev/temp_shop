import "./App.css";
import Catagory from "./components/Catagory";
import ChatBot from "./components/ChatBot";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catagory />
      <Products />
      <ChatBot></ChatBot>
    </div>
  );
}

export default App;
