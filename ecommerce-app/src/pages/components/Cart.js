import React from "react";
// Cart context resides at src/context
import { useCart } from "../../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartTotal,
  } = useCart();

  return (
    <div className="px-8 py-12 min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-6 border-b pb-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-8">
            <h3 className="text-xl font-bold">
              Total: ${cartTotal.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;