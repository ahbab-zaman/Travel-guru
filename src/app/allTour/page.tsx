"use client";
import TourCard from "@/Components/Home/TourCard";
import Header from "@/Components/utils/Header";
import axios from "axios";

import { useEffect, useState } from "react";


export type TravelData = {
  id: string;
  image: string;
  title: string;
  location: string;
  reviews: number;
  rating: number;
  price: number;
};

export default function AllTour() {
  const [data, setData] = useState<TravelData[]>([]);

  useEffect(() => {
    axios("/travel.json").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="pt-32">
      <Header title="Trending Places" subtitle="Our All Tours" />

      <div className="grid grid-cols-4 gap-6 py-8 w-11/12 mx-auto">
        {data.map((d) => (
          <TourCard d={d} key={d.id} />
        ))}
      </div>
    </div>
  );
}
