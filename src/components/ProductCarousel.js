import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function ProductCarousel() {
  const slides = [
    {
      id: 1,
      type: "image",
      src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
      title: "Premium Headphones",
      description: "Experience crystal clear sound quality like never before.",
    },
    {
      id: 2,
      type: "image",
      src: "https://images.pexels.com/photos/23474/pexels-photo.jpg",
      title: "Luxury Smart Watch",
      description: "Stay connected with elegance and performance.",
    },
    {
      id: 3,
      type: "video",
      src: "https://www.pexels.com/download/video/8533450/",
      title: "Premium Shoes",
      description: "Watch how our latest innovation changes everything.",
    },
    {

      id: 4,
      type: "video",
      src: "https://www.pexels.com/download/video/15858004/",
      title: "Sports Shoes",
      description: "See our new collection in action on the track.",
    },
    
  ];

  return (
    <div className="w-full  h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full  h-screen overflow-hidden">

              {/* Image or Video */}
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-105 animate-slowZoom"
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              )}

              {/* Dark Gradient Overlay */}NIKE AIR MAX
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 flex items-center">
                
                <div className="max-w-6xl mx-auto px-8 text-white">
                  
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeUp">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200 animate-fadeUp delay-200">
                    {slide.description}
                  </p>

                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg animate-fadeUp delay-300 ">
                    Shop Now
                  </button>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;