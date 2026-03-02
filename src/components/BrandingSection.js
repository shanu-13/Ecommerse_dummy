import React from "react";

function BrandingSection() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-8 text-white">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          NIKE AIR MAX
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-200">
          Designed for speed. Built for comfort. Engineered for champions.
          Elevate your game with the next generation of performance footwear.
        </p>

        <div className="mt-8 flex gap-6">
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300 px-8 py-3 rounded-lg text-lg font-semibold">
            Shop Now
          </button>

          <button className="border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300 px-8 py-3 rounded-lg text-lg font-semibold">
            Explore
          </button>
        </div>
      </div>

      {/* Decorative Text */}
      <h2 className="absolute bottom-10 right-10 text-[120px] font-extrabold text-white/5 select-none pointer-events-none">
        BUY NIKE
      </h2>
    </section>
  );
}

export default BrandingSection;