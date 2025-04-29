// components/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: use any icon

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-0 z-50 p-3 rounded-full bg-[#fc5056] border-[1px] text-white hover:text-[#fc5056] hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
