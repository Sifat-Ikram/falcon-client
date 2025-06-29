"use client";
import { CiSearch } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { useCategories } from "./hooks/useCategories";
import CategoryDropdown from "./CategoryDropdown";
import Image from "next/image";
import logo from "../../public/logo.png";
import house from "../../public/house.png";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  const { categories, loading, error } = useCategories();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <header className="bg-white shadow font-onest">
      <div className="w-full mx-auto bg-[#0F172A] text-white py-4">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div className="relative flex items-center gap-2">
            <Image src={logo} alt="logo" priority width={24} height={24} />
            <Link href={"/"} className="font-onest text-xl lg:text-2xl font-bold">FALCON</Link>
          </div>
          <div className="hidden sm:flex items-center gap-0">
            <input
              type="text"
              placeholder="Search for anything...."
              className="bg-white text-gray-500 px-3 rounded-l-sm w-full lg:w-[763px] py-1"
            />
            <button className="bg-[#00B795] text-white p-1 rounded-r-sm">
              <CiSearch className="text-2xl" />
            </button>
          </div>
          <div className="flex space-x-4">
            <button onClick={handleSearchClick} className="block sm:hidden">
              <CiSearch className="text-lg lg:text-xl" />
            </button>
            <button>
              <IoCartOutline className="text-lg lg:text-xl" />
            </button>
            <button>
              <IoPersonOutline className="text-base lg:text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-11/12 mx-auto flex justify-between items-center py-4">
          <div className="relative flex items-center gap-2">
            <CategoryDropdown
              categories={categories}
              loading={loading}
              error={error}
            />
          </div>
          <RiMenuLine
            onClick={toggleDropdown}
            className="text-xl block md:hidden"
          />
          <div className="hidden md:flex items-center space-x-8">
            <h1 className="font-onest font-normal text-sm text-[#0F172A]">
              Electronics
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A]">
              Home Appliances
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A]">
              Mother & Baby
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A]">
              Automotive
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A]">
              Sports Gear
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-5">
            <h1 className="font-onest font-normal text-sm text-[#0F172A] flex items-center gap-1">
              <BsBoxSeam />
              TRACK ORDER
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A] flex items-center gap-1">
              <TfiHeadphoneAlt />
              HELP CENTER
            </h1>
            <h1 className="font-onest font-normal text-sm text-[#0F172A] flex items-center gap-1">
              <Image src={house} alt="sell" height={16} width={16} priority />
              SELL WITH US
            </h1>
          </div>
          {showDropdown && (
            <div className="absolute z-50 top-full py-3 right-0 bg-white rounded-md shadow-lg text-gray-700 overflow-hidden flex flex-col">
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">Electronics</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">Home Appliances</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">Mother & Baby</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">Automotive</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">Sports Gear</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">TRACK ORDER</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">HELP CENTER</span>
              <span className="text-base text-right font-onest cursor-pointer px-10 py-2 hover:bg-gray-200 text-[#0F172A]">SELL WITH US</span>
            </div>
          )}
        </div>
        {isSearchOpen && (
          <div className="w-11/12 mx-auto flex items-center gap-0 py-2">
            <input
              type="text"
              placeholder="Search for anything...."
              className="bg-white text-gray-500 px-3 rounded-l-sm w-full py-1"
            />
            <button className="bg-[#00B795] text-white p-1 rounded-r-sm">
              <CiSearch className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
