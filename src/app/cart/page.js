"use client";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFromLocalStorage } from "../../../redux/slices/cartSlice";
import { useEffect } from "react";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const selectedItems = useSelector((state) => state.cart.selected);

  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );

  const total = selectedCartItems.reduce(
    (acc, item) => acc + item.discount_price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50">
      <div className="w-11/12 mx-auto pb-5 bg-gray-50">
        <div className="text-sm text-gray-600 py-4" aria-label="breadcrumb">
          <ol className="list-reset flex flex-wrap">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mx-1">/</li>
            <li>My Cart</li>
          </ol>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <CartList items={cartItems} selected={selectedItems} />
          </div>
          <OrderSummary
            itemCount={selectedCartItems.length}
            total={total}
            selectedItems={selectedCartItems}
          />
        </div>
      </div>
    </div>
  );
}
