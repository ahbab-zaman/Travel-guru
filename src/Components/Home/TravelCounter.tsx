import { kaushan } from "@/app/lib/font";
import { NumberTicker } from "../magicui/number-ticker";
export default function TravelCounter() {
  return (
    <div className="lg:py-12 py-8">
      <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify- lg:gap-0 gap-6">
        <div className="flex items-center gap-2">
          <span className={`${kaushan.className} text-4xl font-bold`}>
            <NumberTicker value={120} />+
          </span>
          <h4 className="text-lg font-semibold text-gray-500">
            Total Destination
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className={`${kaushan.className} text-4xl font-extrabold`}>
            <NumberTicker value={500} />+
          </span>
          <h4 className="text-lg font-semibold text-gray-500">
            Travel Packages
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className={`${kaushan.className} text-4xl font-extrabold`}>
            <NumberTicker value={2} />
            k+
          </span>
          <h4 className="text-lg font-semibold text-gray-500">
            Total Travelers
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className={`${kaushan.className} text-4xl font-extrabold`}>
            <NumberTicker value={7} />
            k+
          </span>
          <h4 className="text-lg font-semibold text-gray-500">Total Reviews</h4>
        </div>
      </div>
    </div>
  );
}
