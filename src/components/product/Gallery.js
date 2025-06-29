"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery({ images }) {
  const [selected, setSelected] = useState(images?.[0] || "");

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
            width={380}
            height={380}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images.map((img) => (
          <div
            key={img}
            onClick={() => setSelected(img)}
            className={`w-20 h-20 rounded cursor-pointer ${
              selected === img ? "ring-2 ring-teal-600" : ""
            }`}
          >
            <Image
              src={img}
              alt="Thumbnail"
              width={68}
              height={68}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
