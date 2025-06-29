export default function AddToCart() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <input
        type="number"
        min="1"
        defaultValue="1"
        className="w-16 border rounded px-2 py-1 text-center"
      />
      <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
