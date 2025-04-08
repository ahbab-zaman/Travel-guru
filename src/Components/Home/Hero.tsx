import Image from "next/image";
import placeBanner from "@/assets/place.webp"
import { kaushan } from "@/app/lib/font";
export default function Hero() {
  return (
    <div className="relative w-full h-[500px]">
      <Image
        fill
        src={placeBanner}
        alt="Travel banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-75  bg-[#000000e1]"></div>
      <div className="absolute h-full w-full flex justify-center items-center flex-col m-auto text-center space-y-4">
        <h2
          className={`text-[#fc5056] text-4xl font-bold ${kaushan.className} `}
        >
          Save UpTo 15%
        </h2>
        <h1 className="text-5xl font-bold text-white">Travel & Adventures</h1>
        <p className="text-lg text-white">
          Find awesome car, plane and hotel in Bangladesh
        </p>
        <div>
          <button className="px-6 py-3 rounded-full bg-[#fc5056] font-extrabold font-2xl text-white hover:border-2 hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent">Book A Tour</button>
        </div>
      </div>
    </div>
  );
}
