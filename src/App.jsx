// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { login } from "./features/authSlice";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <button
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => dispatch(login("Ashish"))}
        >
          Login as Ashish
        </button>
        <Products />
        <Cart />
      </div>
    </div>
  );
}
