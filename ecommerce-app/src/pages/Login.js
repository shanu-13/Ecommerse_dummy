import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-10">
      
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10">

        {/* LEFT SIDE - LOGIN FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl p-8 sm:p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white/10 p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white/10 p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/10 p-3 rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-red-500 hover:text-white transition py-3 rounded-xl font-semibold tracking-wide"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm mt-6 text-gray-400">
            Don’t have an account?{" "}
            <span className="text-red-500 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1600"
            alt="Login Visual"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-3xl font-bold mb-3">
              Step Into Style
            </h3>
            <p className="text-gray-200 max-w-sm">
              Discover premium collections crafted for performance and elegance.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}