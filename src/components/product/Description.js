"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Description({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full p-6 rounded-sm bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">Description</h2>

      <div
        className={`text-gray-700 leading-relaxed text-sm transition-all duration-300 ease-in-out ${
          expanded ? "max-h-full" : "h-[168px]"
        }`}
      >
        <p className="whitespace-pre-line">{product?.description}</p>
      </div>

      {/* Show button only if content is long */}
      {product?.description?.length > 300 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-center text-gray-600 hover:underline flex items-center gap-1"
        >
          {expanded ? "See Less" : "See More"}
          {expanded ? (
            <FaChevronUp className="text-xs" />
          ) : (
            <FaChevronDown className="text-xs" />
          )}
        </button>
      )}
    </section>
  );
}
