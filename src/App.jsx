import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductDisplay from "./Components/ProductDisplay";
import AddProduct from "./Components/AddProduct";
import ProductDetail from './Components/ProductDetail'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDisplay />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
export default App;
