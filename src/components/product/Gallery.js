"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
  "/images/product4.jpg",
  "/images/product5.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="col-span-1">
      <div className="relative overflow-hidden rounded-lg border border-gray-200">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src={selected}
            alt="Product"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images.map((img) => (
          <div
            key={img}
            onClick={() => setSelected(img)}
            className={`w-20 h-20 border rounded cursor-pointer ${
              selected === img ? "ring-2 ring-teal-600" : ""
            }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
