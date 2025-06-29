import RatingStars from "./RatingStars";
import AddToCart from "./AddToCart";

export default function ProductInfo() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">
        Men’s Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt
      </h1>
      <RatingStars />
      <p className="text-gray-600">
        Sold by <span className="font-semibold">Sumon Hossain</span>
      </p>

      {/* Variants */}
      <div>
        <label className="block text-sm mb-1">Color:</label>
        <div className="flex gap-2">
          {["Navy", "Black", "White"].map((clr) => (
            <button
              key={clr}
              className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
            >
              {clr}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Size:</label>
        <select className="border rounded p-1 text-sm w-full max-w-xs">
          {["S", "M", "L", "XL"].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <AddToCart />
    </div>
  );
}
