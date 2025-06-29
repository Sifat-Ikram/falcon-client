import Image from "next/image";
import { BsBoxSeam } from "react-icons/bs";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { PiShootingStarFill } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import logo from "../../../public/logos.png";

export default function DeliveryOptions({ merchant }) {
  return (
    <div className="w-[313px] space-y-4">
      {/* Delivery Options */}
      <div className="border-[1px] border-[#E2E8F0] px-4 py-3 rounded-xl">
        <p className="text-lg font-medium font-onest text-[#475569] mb-2">
          Delivery Options
        </p>
        <div className="space-y-4">
          <div className="flex lg:items-center space-x-3">
            <BsBoxSeam className="text-2xl text-[#04b2a9]" />
            <div>
              <p className="font-medium mb-1 text-[16px] text-[#334155]">
                Regular
              </p>
              <p className="text-[12px] text-[#888]">
                Delivery within 2-3 days
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <BsBoxSeam className="text-2xl text-gray-300" />
            <div>
              <div className="flex lg:items-center gap-5 mb-1">
                <p className="font-medium text-[16px] text-[#CBD5E1]">
                  Express
                </p>
                <p className="text-[10px] text-[#F87171]">Not Available</p>
              </div>
              <p className="font-medium text-[12px] text-[#CBD5E1]">
                Delivery within 24 Hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seller Info */}
      <div className="border-[1px] border-[#E2E8F0] px-[15px] py-5 rounded-xl gap-[10px]">
        <div className="space-y-2 border-b-[1px] border-[#E2E8F0] pb-3">
          <p className="text-[12px] font-onest font-normal text-[#475569] mb-2">
            Sold by
          </p>
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full relative">
              <Image src={merchant?.image ?? logo} alt="logo" priority fill />
            </div>
            {/* Placeholder for logo */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-onest font-normal text-[#475569]">
                {merchant.shop_name}
              </p>
              <div className="relative inline-flex h-6 text-white text-[13px] font-medium">
                {/* Background Gradient */}
                <div className="flex items-center space-x-0">
                  {/* Star icon */}
                  <div className="-ml-2 flex h-5 overflow-hidden">
                    <div className="z-10 bg-gradient-to-tr from-[#FFE5AB] to-[#FE7D0D] px-5 py-[2px] clip-left-parallelogram flex items-center justify-center">
                      <PiShootingStarFill className="text-white text-[10px]" />
                    </div>
                    <div className="-ml-8 bg-gradient-to-r from-[#7519FF] via-[#9C59FF] to-[#7519FF] px-10 py-[2px] clip-right-parallelogram text-[10px] font-normal font-onest text-white flex items-center">
                      {merchant?.status ?? "Rising Star"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HiMiniCheckBadge className="text-blue-500 text-xl" />
          </div>
          <div className="flex items-center justify-between">
            <button className="w-2/5 py-1 px-2 space-x-2 rounded-sm flex items-center text-[#00A788] bg-[#E6F8F4]">
              <IoChatbubbleEllipsesOutline className="text-base" />
              <h1 className="text-sm font-medium">Chat Now</h1>
            </button>
            <button className="w-2/5 py-1 px-2 space-x-2 rounded-sm flex items-center text-[#475569] bg-[#F1F5F9]">
              <h1 className="text-sm font-medium">View Shop</h1>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-5">
          <div className="flex flex-col-reverse items-start space-y-[12px]">
            <p className="text-[28px] font-normal font-onest text-[#64748B]">
              100%
            </p>
            <p className="text-[12px] font-medium text-[#475569] font-onest">
              Ship on Time
            </p>
          </div>
          <div className="flex flex-col-reverse items-start space-y-[12px]">
            <p className="text-[28px] font-normal font-onest text-[#64748B]">
              90%
            </p>
            <p className="text-[12px] font-medium text-[#475569] font-onest">
              Chat Response
            </p>
          </div>
          <div className="flex flex-col-reverse items-start space-y-[12px]">
            <p className="text-[28px] font-normal font-onest text-[#64748B]">
              99.8%
            </p>
            <p className="text-[12px] font-medium text-[#475569] font-onest">
              Shop Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
