"use client";
import axios from "axios";
import Header from "../utils/Header";
import { useEffect, useState } from "react";
import TourCard from "./TourCard";
import Link from "next/link";

export type TravelData = {
  id: string;
  image: string;
  title: string;
  location: string;
  reviews: number;
  rating: number;
  price: number;
};

export default function PopularTour() {
  const [data, setData] = useState<TravelData[]>([]);

  useEffect(() => {
    axios("/travel.json").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="py-12">
      <Header title="Popular Tours" subtitle="Most Popular Tours" />

      <div className="grid grid-cols-4 gap-6 py-8 w-11/12 mx-auto">
        {data.slice(0, 4).map((d) => (
          <TourCard d={d} key={d.id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href={"/allTour"}>
          {" "}
          <button className="px-6 py-3 rounded-md border-[1px] bg-[#fc5056] font-extrabold font-2xl text-white  hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent hover:text-[#222]">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
