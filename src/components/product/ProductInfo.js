"use client";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from "react";

const demoVariants = [
  {
    color_name: "Beige",
    color_code: "#F5F5DC",
    sizes: ["XS", "S", "M"],
  },
  {
    color_name: "Red",
    color_code: "#FF0000",
    sizes: ["XS", "L"],
  },
  {
    color_name: "Navy Blue",
    color_code: "#000080",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    color_name: "Black",
    color_code: "#000000",
    sizes: [],
  },
];

export default function ProductInfo({ product }) {
  const variants =
    product.variants?.length > 0 ? product.variants : demoVariants;

  const [selectedColor, setSelectedColor] = useState(variants[0]);
  const [selectedSize, setSelectedSize] = useState(selectedColor?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Update size options when color changes
  const handleColorSelect = (variant) => {
    setSelectedColor(variant);
    setSelectedSize(variant.sizes?.[0] || null);
  };

  function RatingStars({ rating = 0 }) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  }

  return (
    <div className="space-y-[26px] font-onest px-4">
      <h1 className="text-xl lg:text-2xl leading-5 font-semibold">
        {product.name || "Product title not available"}
      </h1>
      {/* Ratings */}
      <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-base text-[#475569]">
            {product.rating_avg || 0}
          </h1>
          <RatingStars
            rating={product.rating_avg || 0}
            count={product.rating_avg || 0}
          />
          <h1 className="font-normal text-base text-[#475569]">
            {product.rating_count}
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <CiHeart className="text-lg sm:text-2xl lg:text-4xl text-[#64748B] font-light" />
          <IoShareSocialOutline className="text-lg sm:text-2xl lg:text-4xl text-[#64748B] font-light" />
        </div>
      </div>

      {/* price Info */}
      <h1 className="flex items-start gap-1">
        <span className="text-2xl font-semibold text-[#00A788]">
          ৳{product.product_detail.discount_price}
        </span>{" "}
        <span className="text-base font-normal text-[#94A3B8] line-through">
          ৳{product.product_detail.regular_price}
        </span>
      </h1>

      <div className="flex items-center font-sans text-sm gap-4">
        <span className="text-gray-500 text-sm font-medium font-onest">
          Promotion
        </span>

        {/* Ribbon */}
        <div className="relative bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-[6px] pr-6 rounded-l-sm text-[13px] leading-none flex items-center ribbon-notch">
          <span className="font-medium">Min. spend ৳550</span>
          <span className="text-xs ml-1">▼</span>
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4 font-onest">
        {/* Color Selector */}
        <div>
          <label className="block text-base font-medium mb-1">
            Available Color:{" "}
            <span className="font-semibold">{selectedColor?.color_name}</span>
          </label>
          <div className="flex gap-2">
            {variants.map((variant, idx) => (
              <button
                key={idx}
                onClick={() => handleColorSelect(variant)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  selectedColor.color_name === variant.color_name
                    ? "border-[#00A788] ring-2 ring-[#00A788]"
                    : "border-gray-300"
                } ${
                  variant.sizes.length === 0
                    ? "opacity-40 grayscale cursor-not-allowed"
                    : ""
                }`}
                style={{ backgroundColor: variant.color_code }}
                title={variant.color_name}
                disabled={variant.sizes.length === 0}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <label className="block text-base font-medium mb-1">
            Select Size:{" "}
            <span className="font-semibold">{selectedSize || "N/A"}</span>
          </label>
          <div className="grid grid-cols-5 gap-2">
            {["XL", "XS", "S", "M", "L"].map((size) => {
              const isAvailable = selectedColor?.sizes?.includes(size);
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  onClick={() => isAvailable && setSelectedSize(size)}
                  className={`border rounded px-2 py-1 text-sm font-medium transition-all duration-200 ${
                    isAvailable
                      ? isSelected
                        ? "border-[#00A788] text-[#00A788] bg-[#ecfdf5]"
                        : "border-gray-300 text-gray-700"
                      : "opacity-40 cursor-not-allowed"
                  }`}
                  disabled={!isAvailable}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1 w-fit">
          <label className="block text-base font-medium">Quantity</label>
          <div className="flex items-center justify-between border-[1px] border-[#E2E8F0] rounded-full px-1 py-1 w-[195px] bg-white shadow-sm">
            {/* Decrease */}
            <button
              onClick={decrease}
              className="w-[33px] h-[33px] flex items-center justify-center bg-[#F1F5F9] text-2xl text-[#64748B] hover:text-black rounded-full"
            >
              –
            </button>

            {/* Quantity */}
            <span className="text-lg font-medium w-8 text-center">
              {String(quantity).padStart(2, "0")}
            </span>

            {/* Increase */}
            <button
              onClick={increase}
              className="w-[33px] h-[33px] flex items-center justify-center bg-[#F1F5F9] text-2xl text-[#64748B] hover:text-black rounded-full"
            >
              +
            </button>
          </div>
        </div>
        <button className="bg-[#00A788] text-white w-full text-base font-onest font-medium text-center py-[10px] rounded-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
