// components/Navbar.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">🛒 Redux Shop</h1>
      <div className="flex gap-4">
        {user ? (
          <>
            <span>Hello, {user}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <span>Guest</span>
        )}
        <span>Cart Total: ₹{total}</span>
      </div>
    </nav>
  );
}
