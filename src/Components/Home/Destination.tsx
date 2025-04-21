"use client";
type Destination = {
  name: string;
  image: string | StaticImageData;
};
import Image from "next/image";
import Header from "../utils/Header";
import destination1 from "../../../public/d-1.webp";
import destination2 from "../../../public/d-2.webp";
import destination3 from "../../../public/d-3.webp";
import destination4 from "../../../public/d-4.webp";
import destination5 from "../../../public/d-5.webp";
import destination6 from "../../../public/d-4.webp";
import { useState } from "react";
import type { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
export default function Destination() {
  const images = [
    { name: "United Kingdom", image: destination1 },
    { name: "Turkey", image: destination2 },
    { name: "Switzerland", image: destination3 },
    { name: "France", image: destination4 },
    { name: "Thailand", image: destination5 },
    { name: "Australia", image: destination6 },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Header title="Destination" subtitle="Top Attractive Destination" />

      <div className="py-10 px-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(src.image)}
              className="relative cursor-pointer overflow-hidden shadow-lg group"
            >
              <Image
                src={src.image}
                alt={`Image ${idx + 1}`}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-65 transition duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-xl font-semibold">{src.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <AnimatePresence>
            <motion.div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
