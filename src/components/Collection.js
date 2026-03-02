import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=70",
    title: "Speed Runner",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Urban Street",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=70",
    title: "Performance Pro",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Night Edition",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/8159479/pexels-photo-8159479.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Star Light",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/29538711/pexels-photo-29538711.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Cosmic Play",
  },
];

export default function ReviewPage() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Flash Deals!
        </h2>
        <p className="text-gray-400 text-lg">
          Discover what everyone is loving right now.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {reviews.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveId(item.id)}
            className={`rounded-2xl overflow-hidden cursor-pointer
              border border-white/10 transition-all duration-300
              ${
                activeId === item.id
                  ? "shadow-xl scale-105 border-white/30"
                  : "shadow-md"
              }`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="p-6 bg-zinc-900">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Premium comfort and unmatched performance.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}