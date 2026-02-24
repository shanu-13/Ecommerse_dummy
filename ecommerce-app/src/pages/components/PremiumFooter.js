import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function PremiumFooter() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Shoes</li>
              <li className="hover:text-white cursor-pointer">Clothing</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
              <li className="hover:text-white cursor-pointer">New Arrivals</li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
              <li className="hover:text-white cursor-pointer">Gift Cards</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Order Status</li>
              <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Payment Options</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Investors</li>
              <li className="hover:text-white cursor-pointer">Sustainability</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Report a Concern</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Cookie Settings</li>
              <li className="hover:text-white cursor-pointer">Accessibility</li>
              <li className="hover:text-white cursor-pointer">CA Supply Chains Act</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Side */}
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© 2026, Inc. All Rights Reserved</p>
            <p className="mt-2">
              Tamil Nadu, India 
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer transition" />
            <FaTwitter className="hover:text-white cursor-pointer transition" />
            <FaInstagram className="hover:text-white cursor-pointer transition" />
            <FaYoutube className="hover:text-white cursor-pointer transition" />
          </div>

        </div>

      </div>
    </footer>
  );
}

export default PremiumFooter;