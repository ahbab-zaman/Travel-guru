import { Heart } from "lucide-react";
import { TravelData } from "./PopularTour";
import Link from "next/link";

type Props = {
  d: TravelData;
};
export default function TourCard({ d }: Props) {
  return (
    <>
      <Link href={`/details/${d.id}`}>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <img
              src={d.image}
              alt={d.title}
              className="w-full h-52 object-cover hover:scale-110 transition-all duration-500"
            />
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
              <Heart />
            </button>
          </div>

          <div className="p-4">
            <p className="text-sm text-rose-600 font-semibold">{d.location}</p>
            <div className="group">
              <h2 className="relative text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-900 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 group-hover:before:w-full">
                {d.title}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-1 text-red-500">
                <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                  ⭐ {d.rating}
                </span>
              </div>
              <span>{d.reviews} reviews</span>
            </div>

            <div className="mt-4 flex justify-between items-end">
              <p className="text-sm text-gray-500">Starting From</p>
              <p className="text-xl font-semibold italic text-blue-900">
                ${d.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
