import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;