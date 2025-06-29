"use client";

import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const CategoryDropdown = ({ categories, loading, error }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [activeSubcategoryId, setActiveSubcategoryId] = useState(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
    setActiveCategoryId(null);
    setActiveSubcategoryId(null);
  };

  const activeCategory = categories.find((cat) => cat.id === activeCategoryId);
  const activeSubcategory = categories
    .flatMap((cat) => cat.subcategories || [])
    .find((sub) => sub.id === activeSubcategoryId);

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => setShowDropdown(true)}
        className="flex items-center gap-2 text-teal-700 font-semibold text-base hover:text-teal-600 transition"
      >
        <RiMenuLine className="text-xl" />
        <span>Categories</span>
      </button>

      {showDropdown && (
        <div
          onMouseLeave={() => setShowDropdown(false)}
          className="absolute z-50 top-full mt-2 left-0 flex bg-white rounded-md shadow-lg text-sm text-gray-700 overflow-hidden min-w-[220px] max-w-[95vw]"
        >
          {/* CATEGORIES */}
          <div className="w-[220px] overflow-y-auto">
            {loading && <p className="p-3">Loading...</p>}
            {error && <p className="p-3 text-red-500">{error}</p>}
            {!loading && !error && categories.length > 0 ? (
              categories.map((cat) => (
                <div
                  key={cat.id}
                  onMouseEnter={() => {
                    setActiveCategoryId(cat.id);
                    setActiveSubcategoryId(null);
                  }}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setActiveSubcategoryId(null);
                  }}
                  className={`px-4 py-3 hover:bg-gray-100 cursor-pointer transition ${
                    activeCategoryId === cat.id ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  {cat.name}
                </div>
              ))
            ) : (
              <p className="p-3">No categories found.</p>
            )}
          </div>

          {/* SUBCATEGORIES */}
          {activeCategory?.subcategories?.length > 0 && (
            <div className="w-[220px] bg-gray-50 max-h-[350px]">
              {activeCategory.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  onMouseEnter={() => {
                    setActiveSubcategoryId(sub.id);
                  }}
                  onClick={() => {
                    setActiveSubcategoryId(sub.id);
                  }}
                  className={`px-4 py-3 hover:bg-gray-200 cursor-pointer transition ${
                    activeSubcategoryId === sub.id
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                >
                  {sub.name}
                </div>
              ))}
            </div>
          )}

          {/* SUBCHILDREN */}
          {activeSubcategory?.subchildren?.length > 0 && (
            <div className="w-[220px] bg-gray-100 max-h-[350px]">
              {activeSubcategory.subchildren.map((child) => (
                <div
                  key={child.id}
                  className="px-4 py-3 hover:bg-gray-300 cursor-pointer transition"
                >
                  {child.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
