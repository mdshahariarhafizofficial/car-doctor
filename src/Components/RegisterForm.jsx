import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
    return (
      <div className="w-full lg:w-1/2 border border-gray-200 rounded-lg p-8 lg:p-10 shadow-sm bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Sign Up
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="label text-black text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 text-sm outline-none focus:ring-1 focus:ring-[#FF3811]"
            />
          </div>
          {/* Email */}
          <div>
            <label className="label text-black text-lg font-medium mb-2">Email</label>            
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 text-sm outline-none focus:ring-1 focus:ring-[#FF3811]"
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label className="label text-black text-lg font-medium mb-2">Confirm Password</label>            
            <input
              type="password"
              placeholder="Your password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 text-sm outline-none focus:ring-1 focus:ring-[#FF3811]"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-[#e0300d] text-white py-3 rounded-md font-medium transition"
          >
            Sign Up
          </button>
        </form>

        {/* Social Sign Up */}
        <div className="text-center text-gray-500 text-sm my-6">
          Or Sign Up with
        </div>

        <div className="flex justify-center space-x-5 mb-6">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaFacebookF className="text-[#3b5998]" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaLinkedinIn className="text-[#0077b5]" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FaGoogle className="text-[#DB4437]" />
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#FF3811] font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    );
};

export default RegisterForm;