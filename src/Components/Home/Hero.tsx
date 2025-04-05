import Image from "next/image";
import banner from "@/assets/travel-banner.png";
export default function Hero() {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        fill
        src={banner}
        alt="Travel banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full inset-0 bg-black/60"></div>
    </div>
  );
}
