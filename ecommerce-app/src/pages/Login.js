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
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full top-20 left-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="grid grid-cols-2 gap-4">
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
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold tracking-wide"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
}