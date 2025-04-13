"use client";

import Image from "next/image";
import logo from "../../public/favicon.png";
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900">
        <Image src={logo} width={50} height={50} alt="Logo" />
      </div>
    </div>
  );
}
