"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Specifications({ product }) {
  const [expanded, setExpanded] = useState(false);

  const specs = [
    product.brand?.name && { label: "Brand", value: product.brand.name },
    product.sku && { label: "SKU", value: product.sku },
    product.total_stock_qty && {
      label: "Stock Quantity",
      value: product.total_stock_qty,
    },
  ].filter(Boolean);

  const shouldShowToggle = specs.length > 2;

  return (
    <section className="w-full p-6 rounded-sm shadow">
      <h2 className="text-lg font-semibold mb-5">Specifications</h2>

      <div
        className={`text-gray-700 leading-relaxed text-sm transition-all duration-300 ease-in-out ${
          expanded ? "max-h-full" : "h-[168px] overflow-hidden"
        }`}
      >
        <ul className="space-y-3 list-none">
          {specs.map((item, index) => (
            <li
              key={index}
              className="text-base font-onest font-medium text-gray-600 flex items-start gap-2"
            >
              <span className="text-xl leading-[1] mt-1 text-gray-500">•</span>
              <div>
                {item.label}:{" "}
                <span className="text-sm font-normal text-gray-500">
                  {item.value}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {shouldShowToggle && (
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
