"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import travelBg from "../../../public/travel-bg.jpg";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔽 Background Image with Blur and Blend */}
      <Image
        src={travelBg}
        alt="Travel Background"
        fill
        className="object-cover brightness-50 mix-blend-overlay z-0"
        priority
      />

      {/* 🔽 Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* 🔽 Content Card */}
      <div className="z-10 w-full max-w-md bg-white/90 p-8 rounded-lg border border-gray-200 shadow-xl backdrop-blur-md">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6 font-semibold text-sm">
          Or sign in with:
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition"
          >
            <span className="text-lg">
              <FaGoogle />
            </span>{" "}
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
