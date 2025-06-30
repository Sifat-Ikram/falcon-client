"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setCheckoutItems } from "../../../redux/slices/checkoutSlice";
import { clearCart } from "../../../redux/slices/cartSlice";

const OrderSummary = ({ itemCount, total, selectedItems }) => {
  const dispatch = useDispatch();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleApplyCoupon = () => {
    if (applied) {
      return Swal.fire("Notice", "Coupon already applied!", "info");
    }

    if (coupon.trim().toLowerCase() === "dis100") {
      setDiscount(100);
      setApplied(true);
      Swal.fire("Success", "Coupon applied! ৳100 discount added.", "success");
    } else {
      Swal.fire("Invalid", "This coupon code is not valid.", "error");
    }
  };

  const finalTotal = Math.max(total - discount, 0);

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      return Swal.fire(
        "Oops!",
        "Please select at least one item to place an order.",
        "warning"
      );
    }

    dispatch(setCheckoutItems(selectedItems));

    Swal.fire({
      title: "Order Placed!",
      text: `You have successfully placed an order for ${selectedItems.length} item(s).`,
      icon: "success",
    }).then(() => {
      dispatch(clearCart());
    });
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
        <button
          onClick={handleApplyCoupon}
          className="p-[10px] rounded-r-[4px] text-base text-white font-medium bg-[#00B795]"
        >
          Apply
        </button>
        <input
          type="text"
          placeholder="type dis100 to user coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-1 border-[1px] border-[#475569] px-3 py-[10px] rounded"
        />
      </div>
      <div className="flex justify-between text-sm lg:text-base font-medium font-onest text-[#475569]">
        <span>Sub Total</span>
        <span> ৳ {finalTotal}</span>
      </div>

      <div className="text-xs text-gray-500 mt-4">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mr-1"
        />
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
        disabled={!agreed}
        className={`w-full py-2 rounded text-white ${
          agreed ? "bg-emerald-500" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
