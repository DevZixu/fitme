const restaurants = [
  { id: 1, name: "Ramachandra Parlour", cuisine: "South Indian", rating: 4.0, time: "20 Mins", price: "200 for two", image: "/Res1.png" },
  { id: 2, name: "Uma Parlour – Pure Vegetarian", cuisine: "South Indian", rating: 3.2, time: "20 Mins", price: "150 for two", image: "/res2.png" },
  { id: 3, name: "Swap – Diet Meal Box", cuisine: "Healthy food, Salads", rating: 4.5, time: "40 Mins", price: "300 for two", image: "/res3.png" },
  { id: 4, name: "The Good Bowl – Traditional Bowls", cuisine: "North Indian, Punjabi", rating: 4.8, time: "25 Mins", price: "250 for two", image: "/res4.png" },
];

const foodItems = [
  { id: 1, name: "Paneer Tikka Rice Bowl", place: "The Good Bowl", price: "₹200", time: "30 Mins", image: "/food1.png" },
  { id: 2, name: "Aloo Paratha Curd Meal (2 Pcs)", place: "Tarla's Box", price: "₹149", time: "25 Mins", image: "/food2.png" },
  { id: 3, name: "Baked Pizza Wrap – Vegetarian", place: "Flavors – Wraps & Rolls", price: "₹209", time: "35 Mins", image: "/food3.png" },
  { id: 4, name: "Mixed Veg Fried Rice With Dry Fruits", place: "MFC Restaurant", price: "₹180", time: "45 Mins", image: "/food4.png" },
];

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6-5.5-3.2-5.5 3.2 1.4-6L1.3 7.7l6.1-.6L10 1.5z" />
    </svg>
  );
}

function RestaurantCard({ item }) {
  const ratingColor = item.rating >= 4 ? "text-green-500" : "text-orange-500";
  return (
    <div className="bg-gray-50 rounded-[10px] p-[25px] w-fit h-fit flex flex-col gap-[10px]">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg" />
      <h3 className="text-sm font-semibold leading-snug pt-3 pb-1">{item.name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{item.cuisine}</span>
        <span className={`flex items-center gap-1 text-xs font-medium ${ratingColor}`}>
          <StarIcon className="w-3 h-3" />
          {item.rating}
        </span>
      </div>
      <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <img src="/time.svg" alt="" className="w-3 h-3" />
          {item.time}
        </span>
        <span className="flex items-center gap-1">
          <img src="/people.svg" alt="" className="w-3 h-3" />
          {item.price}
        </span>
      </div>
    </div>
  );
}

function FoodItemCard({ item }) {
  return (
    <div className="bg-gray-50 rounded-[10px] p-[25px] w-fit h-fit flex flex-col gap-[10px]">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg" />
      <h3 className="text-sm font-semibold leading-snug pt-3 pb-1">{item.name}</h3>
      <span className="text-xs text-gray-400">{item.place}</span>
      <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <img src="/time.svg" alt="" className="w-3 h-3" />
          {item.price}
        </span>
        <span className="flex items-center gap-1">
          <img src="/people.svg" alt="" className="w-3 h-3" />
          {item.time}
        </span>
      </div>
    </div>
  );
}

export function ServiceCards() {
  return (
    <section className="px-10 py-10 grid grid-cols-2 gap-24 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold mb-4">Nearby Restaurants</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} item={r} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-4">Recommended Food Items</h2>
        <div className="grid grid-cols-2 gap-4">
          {foodItems.map((f) => (
            <FoodItemCard key={f.id} item={f} />
          ))}
        </div>
      </div>
    </section>
  );
}