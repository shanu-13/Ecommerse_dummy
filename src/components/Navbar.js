import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-black/70 backdrop-blur-md 
                    border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-lg sm:text-xl font-bold tracking-wider">
          ECOMSHOP
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white text-sm uppercase">
          <a href="/" className="hover:text-gray-500 transition">Home</a>
          <a href="/shop" className="hover:text-gray-500 transition">Shop</a>
          <a href="/reviews" className="hover:text-gray-500 transition">Favourites</a>
          <a href="/cart" className="hover:text-gray-500 transition">Cart</a>
          <a href="/login" className="hover:text-gray-500 transition">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 space-y-6 text-white text-sm uppercase">
          <a href="/" className="block hover:text-red-500 transition">Home</a>
          <a href="/shop" className="block hover:text-red-500 transition">Shop</a>
          <a href="/reviews" className="block hover:text-red-500 transition">Reviews</a>
          <a href="/cart" className="block hover:text-red-500 transition">Cart</a>
          <a href="/login" className="block hover:text-red-500 transition">Login</a>
        </div>
      )}
    </nav>
  );
}