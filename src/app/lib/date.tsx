"use client";

import { format } from "date-fns";
import { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range"; // ✅ Import RangeKeyDict
import { Range } from "react-date-range"; // ✅ Import Range type
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateSelector() {
  const [showPicker, setShowPicker] = useState(false);
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formattedRange = `${format(
    range[0].startDate!,
    "yyyy-MM-dd"
  )} - ${format(range[0].endDate!, "yyyy-MM-dd")}`;

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
            onChange={(item: RangeKeyDict) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={["#3b82f6"]}
          />
        </div>
      )}
    </div>
  );
}
