"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { Range } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
export default function DateSelector() {
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const formattedRange = `${format(
    range[0].startDate,
    "yyyy-MM-dd"
  )} - ${format(range[0].endDate, "yyyy-MM-dd")}`;
  return (
    <div className="relative w-fit mt-2">
      <div
        className="bg-white px-4 py-3 rounded-xl shadow cursor-pointer w-[280px]"
        onClick={() => setShowPicker(!showPicker)}
      >
        {formattedRange}
      </div>

      {showPicker && (
        <div className="absolute z-50 mt-2">
          <DateRange
            editableDateInputs={true}
            onChange={(item: { selection: Range }) =>
              setRange([item.selection])
            }
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={["#3b82f6"]}
          />
        </div>
      )}
    </div>
  );
}
