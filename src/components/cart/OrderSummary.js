"use client";
import Swal from "sweetalert2";

const OrderSummary = ({ itemCount, total }) => {
  const handleCheckout = () => {
    Swal.fire("Success", "Proceeding to checkout...", "success");
  };

  return (
    <div className="bg-white p-6 shadow rounded-md space-y-4">
      <h2 className="text-base md:text-lg lg:text-2xl font-medium font-onest text-[#475569]">
        Order summary
      </h2>
      <div className="flex justify-between text-sm lg:text-base font-medium font-onest text-[#475569]">
        <span>Price ({itemCount} items)</span>
        <span> ৳ {total}</span>
      </div>
      <div className="flex justify-between text-sm lg:text-base font-medium font-onest text-[#475569]">
        <span>Shipping fee</span>
        <a href="#" className="text-[#3B82F6] text-sm">
          To be added
        </a>
      </div>
      <div className="flex flex-row-reverse items-center">
        <button className="p-[10px] rounded-r-[4px] text-base text-white font-medium bg-[#00B795]">
          Apply
        </button>
        <input
          type="text"
          placeholder="Store / Falkon coupon"
          className="flex-1 border-[1px] border-[#475569] px-3 py-[10px] rounded"
        />
      </div>
      <div className="flex justify-between text-sm lg:text-base font-medium font-onest text-[#475569]">
        <span>Sub Total</span>
        <span> ৳ {total}</span>
      </div>

      <div className="text-xs text-gray-500 mt-4">
        <input type="checkbox" className="mr-1" /> I have read and agree to the
        <a href="#" className="text-blue-500">
          {" "}
          Terms and Conditions
        </a>
        ,
        <a href="#" className="text-blue-500">
          {" "}
          Privacy Policy
        </a>{" "}
        and
        <a href="#" className="text-blue-500">
          {" "}
          Refund and Return Policy
        </a>
        .
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-emerald-500 text-white py-2 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
