import CartItem from "./CartItem";
import { GoInbox } from "react-icons/go";

const CartList = ({ items }) => {
  const grouped = items.reduce((acc, item) => {
    acc[item.seller] = acc[item.seller] || [];
    acc[item.seller].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-md p-5 space-y-[21px]">
      <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] pb-8 max-sm:space-x-3">
        <h2 className="text-lg sm:text-xl lg:text-[32px] font-semibold font-onest text-[#0F172A]">
          My Cart ({items.length})
        </h2>
        <div className="spcae-x-2 md:space-x-5 lg:space-x-[34px]">
          <label className="font-onest text-xs sm:text-sm lg:text-base font-normal text-[#475569]">
            <input type="checkbox" className="mr-1" />
            Select All
          </label>
          <button className="font-onest text-xs sm:text-sm lg:text-base font-normal text-[#475569]">
            Clear All
          </button>
        </div>
      </div>

      {Object.entries(grouped).map(([seller, sellerItems]) => (
        <div key={seller}>
          <div className="bg-gray-100 px-4 py-2 flex items-center space-x-3">
            <input type="checkbox" />
            <div className="flex items-center space-x-2">
              <GoInbox />
              <h1 className="text-sm font-normal font-onest text-[#334155]">
                {seller}
              </h1>
            </div>
          </div>
          {sellerItems.map((item, idx) => (
            <CartItem key={`${seller}-${idx}`} product={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartList;
