import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Shaheen Mohammed",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment: "Absolutely amazing quality! Super comfortable and stylish.",
  },
  {
    id: 2,
    name: "Ananya",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "Loved the design and fast delivery. Will shop again!",
  },
  {
    id: 3,
    name: "Vivien Patel",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    comment: "Best purchase this year. Premium feel and great support.",
  },
  {
    id: 4,
    name: "Aaravya",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "Feels premium and worth every penny.",
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const itemsPerView =
    window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 768
      ? 2
      : 1;

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const visibleReviews = reviews
    .slice(index, index + itemsPerView)
    .concat(
      reviews.slice(
        0,
        Math.max(0, index + itemsPerView - reviews.length)
      )
    );

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-500">
            Trusted by thousands of happy customers
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {visibleReviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 p-8 rounded-2xl shadow-lg min-h-[260px]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">
                        {review.name}
                      </h4>
                      <div className="text-yellow-500 text-sm">
                        {"⭐".repeat(review.rating)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}