import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <div id="fb-root"></div>

    <div id="fb-customer-chat" class="fb-customerchat"></div>
    
    </div>
  );
}

export default App;
