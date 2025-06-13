// src/app/details/[id]/page.tsx

import { MapPin } from "lucide-react";
import Image from "next/image";
import GuestSelector from "@/app/lib/personSelect";
import TimeSelector from "@/app/lib/TimeSelector";
import DateSelector from "@/app/lib/date";

type TravelItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
  reviews: number;
  rating: number;
};

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/travel.json`, {
    cache: "no-store",
  });
  const data: TravelItem[] = await res.json();
  const detail = data.find((item) => item.id === id);

  if (!detail) {
    return <div className="pt-32 text-center">Travel package not found.</div>;
  }

  return (
    <section className="w-11/12 mx-auto pt-32 pb-16 gap-5 flex flex-col lg:flex-row">
      <div className="lg:w-[70%] space-y-4">
        <figure className="rounded-lg">
          <Image
            className="w-full rounded-lg"
            src={detail.image}
            width={750}
            height={600}
            alt="Travel Image"
          />
        </figure>
        <h4 className="font-light text-lg flex items-center gap-2">
          <MapPin /> {detail.location}
        </h4>
        <h2 className="text-4xl font-bold text-[#222]">{detail.title}</h2>
        <hr />
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <p className="font-light">From</p>
            <p className="font-bold text-[#fc5056]">${detail.price}</p>
          </div>
          <div>
            <p className="font-light">Duration</p>
            <p className="font-semibold">10 Days</p>
          </div>
          <div>
            <p className="font-light">Max people</p>
            <p className="font-semibold">10</p>
          </div>
          <div>
            <p className="font-light">Min Age</p>
            <p className="font-semibold">10+</p>
          </div>
          <div>
            <p className="font-light">Tour Type</p>
            <p className="font-semibold">Adventure, Innovation</p>
          </div>
          <div>
            <p className="font-light">Reviews</p>
            <p className="font-semibold">
              {detail.reviews} <span>({detail.rating})</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] p-8 lg:w-[30%] space-y-4 rounded-lg">
        <h2 className="font-bold text-2xl">
          ${detail.price}/<span className="text-lg font-light">per person</span>
        </h2>
        <hr className="mt-2" />
        <div>
          <h4 className="text-2xl font-bold">Date</h4>
          <DateSelector />
        </div>
        <div>
          <h4 className="text-2xl font-bold">Time</h4>
          <TimeSelector />
        </div>
        <div>
          <GuestSelector />
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Total</h4>
          <p className="text-2xl font-bold text-[#fc5056]">${detail.price}</p>
        </div>
        <div>
          <button className="px-6 py-3 w-full rounded-md border-[1px] bg-[#fc5056] font-extrabold font-2xl text-white hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent hover:text-[#222]">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
