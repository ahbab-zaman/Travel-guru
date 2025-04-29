"use client";

import { useEffect, useState } from "react";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { kaushan } from "@/app/lib/font";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHome = pathName === "/";

  return (
    <nav
      className={`${
        scrolled
          ? "bg-[#222] transition-all duration-500"
          : `${isHome ? "bg-transparent" : "bg-[#222]"}`
      } w-full fixed top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex-shrink-0 text-xl font-bold text-white `}>
            <Link href={"/"}>
              Travel<span className={`${kaushan.className} text-2xl font-extrabold text-orange-400`}>Guru</span>
            </Link>
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
              href="/about"
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
            <button className="px-4 py-2 rounded-2xl bg-[#fc5056] border-[1px] font-extrabold font-2xl text-white hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent">
              Sign Up
            </button>

            {/* Sign In Button with Border Style */}
            <button className="px-4 py-2 font-semibold text-gray-800 hover:transition-all duration-300 ease-in-out bg-white border-[1px] rounded-2xl shadow-lg hover:bg-gray-800 hover:text-white hover:border-[#fff]">
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
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#222] text-white transform transition-transform duration-500 ease-in-out ${
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
            <button className="px-4 py-2 rounded-2xl bg-[#fc5056] border-[1px] font-extrabold font-2xl text-white hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent">
              Sign Up
            </button>

            {/* Sign In Button with Border Style */}
            <button className="px-4 py-2 font-semibold text-gray-800 hover:transition-all duration-300 ease-in-out bg-white border-[1px] rounded-2xl shadow-lg hover:bg-gray-800 hover:text-white hover:border-[#fff]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
