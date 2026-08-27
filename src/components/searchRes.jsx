const dishes = [
  {
    name: "Paneer Tikka Rice Bowl",
    restaurant: "The Good Bowl",
    price: "₹200",
    time: "20 Mins",
    color: "bg-orange-700",
  },
  {
    name: "Dal Fry Rice Bowl - Fried With Ghee",
    restaurant: "The Good Bowl",
    price: "₹180",
    time: "20 Mins",
    color: "bg-yellow-500",
  },
  {
    name: "Butter Paneer Rice Bowl Large",
    restaurant: "The Good Bowl",
    price: "₹299",
    time: "20 Mins",
    color: "bg-stone-200",
  },
  {
    name: "Paneer Signature Rice Bowl (Regular)",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹200",
    time: "20 Mins",
    color: "bg-orange-700",
  },
  {
    name: "Chicken Signature Rice Bowl",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹180",
    time: "20 Mins",
    color: "bg-red-600",
  },
  {
    name: "Royal Chicken Rice Bowl (Jumbo)",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹299",
    time: "20 Mins",
    color: "bg-orange-600",
  },
];

function CoinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">
        ₹
      </text>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function DishCard({ dish }) {
  return (
    <div className="flex gap-2.5 bg-neutral-50 rounded-xl p-2.5">
      <div className={`w-14 h-14 rounded-lg shrink-0 ${dish.color}`} />
      <div className="flex flex-col justify-center min-w-0">
        <p className="text-[12.5px] font-semibold text-gray-900 truncate">
          {dish.name}
        </p>
        <p className="text-[11px] text-gray-400 mb-1.5">{dish.restaurant}</p>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-[11px] font-medium text-orange-500">
            <CoinIcon /> {dish.price}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-500">
            <ClockIcon /> {dish.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SearchResults() {
  const rowOne = dishes.slice(0, 3);
  const rowTwo = dishes.slice(3, 6);

  return (
    <div className="p-6 bg-white">
      <h2 className="text-[15px] font-semibold text-gray-900 mb-4">
        Search results for " Rice Bowls "
      </h2>

      <div className="flex gap-2.5 mb-5">
        <button className="rounded-full px-5 py-1.5 text-[13px] font-medium bg-orange-500 text-white">
          Dishes
        </button>
        <button className="rounded-full px-5 py-1.5 text-[13px] font-medium bg-white text-gray-700 border border-gray-300">
          Restaurants
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-1.5">
        {rowOne.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
      <div className="flex justify-end mb-5">
        <a href="#" className="text-xs font-medium text-orange-500">
          View More &gt;
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-1.5">
        {rowTwo.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
      <div className="flex justify-end mb-5">
        <a href="#" className="text-xs font-medium text-orange-500">
          View More &gt;
        </a>
      </div>
    </div>
  );
}