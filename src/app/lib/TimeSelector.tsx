"use client";

import { useState } from "react";

export default function TimeSelector() {
  const [selectedTime, setSelectedTime] = useState("");

  const timeOptions = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  return (
    <div className="w-fit mt-2">
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="w-70 px-4 py-3 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select a time
        </option>
        {timeOptions.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}
