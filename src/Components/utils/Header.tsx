type HeaderProps = {
  title: string;
  subtitle?: string;
};
import { kaushan } from "@/app/lib/font";
export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-center items-center gap-8">
        <span className="lg:w-[90px] w-[40px] h-[2px] bg-gray-500"></span>
        <h1
          className={`${kaushan.className} text-[#fc5056] lg:text-4xl text-2xl font-bold `}
        >
          {title}
        </h1>
        <span className="lg:w-[90px] w-[40px] h-[2px] bg-gray-500"></span>
      </div>
      <h1 className="text-[#222] font-extrabold lg:text-4xl text-2xl text-center">{subtitle}</h1>
    </div>
  );
}
