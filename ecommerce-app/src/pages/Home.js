import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

import ProductCarousel from "./components/ProductCarousel";
import BrandingSection from "./components/BrandingSection";
import PremiumFooter from "./components/PremiumFooter";

function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99,
      images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg",
      "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg",
      "https://images.pexels.com/photos/3394648/pexels-photo-3394648.jpeg"
    ],
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149,
      images: [
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
        "https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg",
        "https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg",
      ],
    },
    {
      id: 3,
      name: "Sneakers",
      price: 79,
      images: [
        "https://images.pexels.com/photos/4211339/pexels-photo-4211339.jpeg",
        "https://images.pexels.com/photos/7524995/pexels-photo-7524995.jpeg",
        "https://images.pexels.com/photos/4219179/pexels-photo-4219179.jpeg",
      ],
    },
    {
      id: 4,
      name: "Belts",
      price: 79,
      images: [
        "https://images.pexels.com/photos/35322153/pexels-photo-35322153.jpeg",
        "https://images.pexels.com/photos/35322156/pexels-photo-35322156.jpeg",
        "https://images.pexels.com/photos/35322157/pexels-photo-35322157.jpeg",
      ],
    },
    {
      id: 5,
      name: "Boots",
      price: 79,
      images: [
        "https://images.pexels.com/photos/8159479/pexels-photo-8159479.jpeg",
      ]
        
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 79,
      images: [
        "https://images.pexels.com/photos/29538711/pexels-photo-29538711.jpeg",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <ProductCarousel />
      <BrandingSection />
      <Hero />
      <section className="px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <PremiumFooter />
    </>
  );
}

export default Home;