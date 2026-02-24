import { motion } from "framer-motion";
// useCart hook exposes the context API without importing the context object directly
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-zinc-900 rounded-2xl p-6 cursor-pointer shadow-lg"
    >
      {/* Product Image */}
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-400">${product.price}</p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-xl font-medium transition"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}