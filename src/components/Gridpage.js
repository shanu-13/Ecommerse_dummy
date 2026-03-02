import { motion } from "framer-motion";

export default function Gridpage() {
  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 py-12 sm:py-20">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
        Festive Collections
      </h2>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

        {/* LEFT PRODUCT */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            src="https://images.pexels.com/photos/35322153/pexels-photo-35322153.jpeg"
            alt="Speed Collection"
            className="w-full h-[350px] sm:h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500"></div>

          {/* Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Speed Collection
            </h2>

            <button className="border border-white px-4 sm:px-6 py-2 rounded-full 
                               text-sm sm:text-base
                               hover:bg-white hover:text-black transition duration-300">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* RIGHT PRODUCT */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            src="https://images.pexels.com/photos/29538711/pexels-photo-29538711.jpeg"
            alt="Urban Style"
            className="w-full h-[350px] sm:h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500"></div>

          {/* Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Urban Style
            </h2>

            <button className="border border-white px-4 sm:px-6 py-2 rounded-full 
                               text-sm sm:text-base
                               hover:bg-white hover:text-black transition duration-300">
              Shop Now
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}