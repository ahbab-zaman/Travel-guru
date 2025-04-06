import Image from "next/image";
import banner from "@/assets/travel-banner.png";
import { kaushan } from "@/app/lib/font";
export default function Hero() {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        fill
        src={banner}
        alt="Travel banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-75  bg-[#152548f5]"></div>
      <div className="absolute h-full w-full flex justify-center items-center flex-col m-auto text-center space-y-2">
        <h2
          className={`text-[#fc5056] text-4xl font-bold ${kaushan.className} `}
        >
          Save UpTo 15%
        </h2>
        <h1 className="text-5xl font-bold text-white">Travel & Adventures</h1>
        <p className="text-lg text-white">
          Find awesome car, plane and hotel in Bangladesh
        </p>
      </div>
      <div className="absolute w-[85%] mx-auto bg-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div className="shadow-md p-6 flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col">
            <label className="font-kaushan text-sm mb-1">Destination</label>
            <input
              type="text"
              placeholder="Where to go?"
              className="border border-gray-300 rounded-md px-4 py-2 w-40 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-kaushan text-sm mb-1">Type</label>
            <input
              type="text"
              placeholder="Activity"
              className="border border-gray-300 rounded-md px-4 py-2 w-40 placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-kaushan text-sm mb-1">When</label>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-4 py-2 w-44 text-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-kaushan text-sm mb-1">Guests</label>
            <input
              type="number"
              placeholder="0"
              className="border border-gray-300 rounded-md px-4 py-2 w-24 text-center text-gray-500"
            />
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md px-6 py-2 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
