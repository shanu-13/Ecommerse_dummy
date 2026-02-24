import React from "react";
// context file is two levels up from this folder
import { useCart } from "../../context/CartContext";
function Navbar() {
  const { cartCount } = useCart();
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Shopsy</h1>
      
      <ul className="flex gap-6 font-medium">
        <li className="cursor-pointer hover:text-gray-900">Home</li>
        <li className="cursor-pointer hover:text-gray-900">Shop</li>
        <li className="relative cursor-pointer hover:text-gray-900">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </li>
        <li className="cursor-pointer hover:text-gray-900">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;