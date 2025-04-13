"use client";

import { useState } from "react";

type GuestType = "adults" | "kids" | "children";

export default function GuestSelector() {
  const [guests, setGuests] = useState({
    adults: 1,
    kids: 0,
    children: 0,
  });

  const handleChange = (type: GuestType, delta: number) => {
    setGuests((prev) => {
      const newValue = Math.max(0, prev[type] + delta);
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div className="space-y-4 text-gray-800 mt-3">
      {[
        { label: "Adults (18+ years)", key: "adults" },
        { label: "Kids (12+ years)", key: "kids" },
        { label: "Children (3+ years)", key: "children" },
      ].map((item) => (
        <div key={item.key} className="flex items-center justify-between">
          <span className="font-semibold">{item.label}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleChange(item.key as GuestType, -1)}
              className="w-8 h-8 flex items-center justify-center rounded-md border bg-[#f1f1f1] hover:bg-gray-100"
            >
              −
            </button>
            <span className="w-6 text-center">
              {guests[item.key as GuestType]}
            </span>
            <button
              onClick={() => handleChange(item.key as GuestType, 1)}
              className="w-8 h-8 flex items-center justify-center rounded-md border bg-[#f1f1f1] hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
