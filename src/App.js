import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./container/login";
import Product from "./container/product/product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
