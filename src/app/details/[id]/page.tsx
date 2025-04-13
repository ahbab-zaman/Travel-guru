import DateSelector from "@/app/lib/date";
import GuestSelector from "@/app/lib/personSelect";
import TimeSelector from "@/app/lib/TimeSelector";
import Image from "next/image";

type DetailsParams = {
  params: {
    id: string;
  };
};
interface TravelItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
}
export default async function DetailsPage({ params }: DetailsParams) {
  const res = await fetch(`http://localhost:3000/travel.json`);
  const data: TravelItem[] = await res.json();
  const detail = data.find((item) => item.id === params.id);
  console.log(detail);

  return (
    <>
      <section className="w-11/12 mx-auto pt-32 gap-5 flex">
        <div className="lg:w-[70%]">
          <figure className=" rounded-lg">
            <Image
              className="w-full"
              src={detail?.image!}
              width={750}
              height={600}
              alt="Travel Image"
            />
          </figure>
          <h4>{detail?.location}</h4>
        </div>
        <div className="bg-[#f1f1f1] p-8 lg:w-[30%] space-y-4 rounded-lg">
          <h2 className="font-bold text-2xl">
            ${detail?.price}/
            <span className="text-lg font-light">per person</span>
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
          <div>
            <button className="px-6 py-3 w-full rounded-md bg-[#fc5056] font-extrabold font-2xl text-white hover:border-2 hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
