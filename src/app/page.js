"use client";
import Image from "next/image";
import { FaRedo } from "react-icons/fa";
import { useProducts } from "@/components/hooks/useProducts";
import Link from "next/link";

export default function Home() {
  const { products, loading, error, refetch: fetchProducts } = useProducts();

  return (
    <div className="min-h-screen w-11/12 mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-10">All Products</h1>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20">
          <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-20 text-red-600">
          <p className="mb-4">⚠️ Failed to load products. Please try again.</p>
          <button
            onClick={fetchProducts}
            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            <FaRedo className="mr-2" />
            Try Again
          </button>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-3 sm:mb-4">
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-xl sm:rounded-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Product Info */}
              <div className="px-3 pb-4 sm:px-4 sm:pb-5 md:px-5 md:pb-6 flex flex-col flex-1">
                {/* Title */}
                <h2 className="text-sm sm:text-base md:text-lg font-medium mb-2 text-gray-800 line-clamp-2">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-teal-600 font-semibold text-sm sm:text-base">
                    BDT {product.discount_price}
                  </span>
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    BDT {product.regular_price}
                  </span>
                </div>

                {/* Badges */}
                {product.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                    {product.badges.map((badge) => (
                      <span
                        key={badge.id}
                        className="bg-teal-100 text-teal-700 text-[10px] sm:text-xs font-medium px-2 py-[3px] sm:py-1 rounded-full"
                      >
                        {badge.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
