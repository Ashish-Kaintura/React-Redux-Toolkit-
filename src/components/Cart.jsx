// components/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex justify-between my-2">
                {item.name} - ₹{item.price}
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: ₹{total}</p>
          <button
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
