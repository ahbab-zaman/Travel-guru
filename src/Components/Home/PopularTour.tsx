"use client";
import axios from "axios";
import Header from "../utils/Header";
import { useEffect, useState } from "react";
import TourCard from "./TourCard";

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
        {data.map((d) => (
          <TourCard d={d} key={d.id} />
        ))}
      </div>
    </div>
  );
}
