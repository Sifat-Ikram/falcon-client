export default function DeliveryOptions() {
  return (
    <div className="space-y-4 p-4 border border-gray-200 rounded">
      <h2 className="font-semibold mb-2">Delivery Options</h2>
      <p>
        Region: <span className="font-medium">Dhaka</span>
      </p>
      <p>
        Cash on Delivery: <span className="font-medium">Available</span>
      </p>
      <div className="space-y-1">
        <p>100% Genuine</p>
        <p>90% On-time Delivery</p>
        <p>99.8% Satisfaction</p>
      </div>
      <button className="text-teal-600 text-sm hover:underline mt-2">
        Seller Info
      </button>
    </div>
  );
}
