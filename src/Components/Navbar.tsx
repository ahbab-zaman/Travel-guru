"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/plane.svg"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md fixed top-0 z-50 h-[64px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <Image src={logo} width={100} height={100} alt="Website logo" />
          </div>

          {/* Middle Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="relative group text-white hover:text-white transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative group text-white hover:text-white transition"
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative group text-white hover:text-white transition"
            >
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/"
              className="relative group text-white hover:text-white transition"
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Right Side - Icons/Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              Login
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
              🔔
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
          <button className="bg-gray-100 p-2 rounded-full w-fit hover:bg-gray-200 transition">
            🔔
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
