"use client";

import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/favicon.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 h-[64px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white">
            <Link href={"/"}>TravelGuru</Link>
          </div>

          {/* Middle Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="relative font-semibold group text-white hover:text-white transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative font-semibold group text-white hover:text-white transition"
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative font-semibold group text-white hover:text-white transition"
            >
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative font-semibold group text-white hover:text-white transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Right Side - Icons/Buttons */}
          <div className="lg:flex hidden gap-4 items-center justify-center">
            {/* Sign Up Button */}
            <button className="relative px-4 py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-gray-800 rounded-2xl shadow-lg group hover:scale-105 hover:text-rose-500">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform scale-0 bg-white rounded-2xl group-hover:scale-100 group-hover:opacity-10"></span>
              Sign Up
            </button>

            {/* Sign In Button with Border Style */}
            <button className="relative px-4 py-2 font-semibold text-gray-800 transition-all duration-300 ease-in-out bg-white rounded-2xl shadow-lg group hover:bg-gray-800 hover:text-white hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <AlignRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          {" "}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="border-2 border-white p-1 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative font-semibold group text-white hover:text-white transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative font-semibold group text-white hover:text-white transition"
          >
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative font-semibold group text-white hover:text-white transition"
          >
            Services
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative font-semibold group text-white hover:text-white transition"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
          <div className="flex gap-4 items-center justify-center">
            {/* Sign Up Button */}
            <button className="relative px-4 py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-gray-800 rounded-2xl shadow-lg group hover:scale-105 hover:text-rose-500">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform scale-0 bg-white rounded-2xl group-hover:scale-100 group-hover:opacity-10"></span>
              Sign Up
            </button>

            {/* Sign In Button with Border Style */}
            <button className="relative px-4 py-2 font-semibold text-gray-800 transition-all duration-300 ease-in-out bg-white rounded-2xl shadow-lg group hover:bg-gray-800 hover:text-white hover:scale-105">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
