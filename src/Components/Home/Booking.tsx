import { kaushan } from "@/app/lib/font";
import React from "react";
import placeBanner from "@/assets/bookingBanner.png";
import Image from "next/image";
export default function Booking() {
  return (
    <>
    <section className="py-12">
    <div className="relative w-full h-[400px]">
      <Image
        fill
        src={placeBanner}
        alt="Travel banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-75  bg-[#000000e1]"></div>
      <div className="absolute h-full w-full flex justify-center items-center flex-col m-auto text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">
          Are You Still Interested In Tour
        </h1>
        <p className="text-lg text-white">
          We offer a wide range of procedures to help you get the perfect smile
        </p>
        <div>
          <button className="px-6 py-3 rounded-full bg-[#fc5056] border-[1px] font-extrabold font-2xl text-white hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent">
            Book A Tour
          </button>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
