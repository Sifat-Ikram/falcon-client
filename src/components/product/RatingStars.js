export default function RatingStars({ rating = 4.7, reviews = 256 }) {
  const stars = Array(5).fill(0);
  return (
    <div className="flex items-center space-x-1 text-sm">
      {stars.map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c...Z" />
        </svg>
      ))}
      <span>{rating}</span>
      <span className="text-gray-500">({reviews})</span>
    </div>
  );
}
