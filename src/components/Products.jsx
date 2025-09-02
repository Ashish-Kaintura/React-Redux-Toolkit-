// components/Products.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="p-4 border rounded-lg shadow">
          <h2 className="font-bold">{p.name}</h2>
          <p>₹{p.price}</p>
          <button
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch(addToCart(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
