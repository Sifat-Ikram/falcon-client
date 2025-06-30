"use client";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  toggleSelectItem,
  updateQuantity,
} from "../../../redux/slices/cartSlice";

const CartItem = ({ product, isSelected }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSelectItem(product.id));
  };

  const handleIncrease = () => {
    dispatch(
      updateQuantity({ id: product.id, quantity: product.quantity + 1 })
    );
  };

  const handleDecrease = () => {
    const newQty = product.quantity > 1 ? product.quantity - 1 : 1;
    dispatch(updateQuantity({ id: product.id, quantity: newQty }));
  };

  const handleDelete = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="flex items-start p-4 gap-2 sm:gap-3 lg:gap-4">
      <input type="checkbox" checked={isSelected} onChange={handleToggle} />
      <Image
        src={product.image}
        alt={product.name}
        height={80}
        width={80}
        priority
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col sm:flex-row justify-between space-y-5 sm:space-x-20 md:space-x-20">
        <div className="flex flex-col space-y-4 flex-1">
          <p className="font-medium text-sm sm:text-base font-onest text-[#0F172A]">
            {product.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Color: {product.color}, Size: {product.size}
          </p>
          <div className="flex items-center space-x-5">
            <div className="flex items-center justify-between border-[1px] border-[#E2E8F0] rounded-full px-1 py-1 w-[161px] bg-white shadow-sm">
              {/* Decrease */}
              <button
                onClick={handleDecrease}
                className="w-[33px] h-[33px] flex items-center justify-center bg-[#F1F5F9] text-2xl text-[#64748B] hover:text-black rounded-full"
              >
                –
              </button>

              {/* Quantity */}
              <span className="text-lg font-medium w-8 text-center">
                {String(product.quantity).padStart(2, "0")}
              </span>

              {/* Increase */}
              <button
                onClick={handleIncrease}
                className="w-[33px] h-[33px] flex items-center justify-center bg-[#F1F5F9] text-2xl text-[#64748B] hover:text-black rounded-full"
              >
                +
              </button>
            </div>
            <button onClick={handleDelete}>
              <RiDeleteBinLine className="text-xs sm:text-sm text-[#94A3B8]" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-col lg:flex-row items-center space-x-2">
          <p className="text-sm sm:text-base lg:text-xl font-onest text-[#0F172A] font-bold">
            {" "}
            ৳ {product.discount_price}
          </p>
          <p className="text-sm sm:text-base font-onest font-normal line-through text-[#475569]">
            ৳ {product.regular_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
