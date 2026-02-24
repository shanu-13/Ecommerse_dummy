import React from "react";
// Cart context is defined at src/context/CartContext.js
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems: cart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 mb-4">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
