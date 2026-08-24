const defaultRecommendations = [
  {
    id: 1,
    title: 'Baked Pizza Wrap - Vegetarian',
    restaurant: 'Faasos - wraps & rolls',
    price: '₹209',
    time: '31 Mins',
    imageUrl: '/recommendations/baked-pizza-wrap.jpg',
  },
  {
    id: 2,
    title: 'Butter Chicken Pizza - 8 Serve',
    restaurant: 'ovenstory pizza',
    price: '₹299',
    time: '26 Mins',
    imageUrl: '/recommendations/butter-chicken-pizza.jpg',
  },
  {
    id: 3,
    title: 'Mexican Patty Signature Wrap',
    restaurant: 'subway',
    price: '₹273',
    time: '32 Mins',
    imageUrl: '/recommendations/mexican-patty-wrap.jpg',
  },
  {
    id: 4,
    title: 'Southwest Chicken Salad',
    restaurant: 'beagento',
    price: '₹220',
    time: '41 Mins',
    imageUrl: '/recommendations/southwest-chicken-salad.jpg',
  },
];

function TagIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function RecommendationCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(item)}
      className="bg-[#f5f5f5] rounded-2xl p-3 flex flex-col justify-between text-left hover:shadow-md transition-shadow duration-200"
    >
      <div>
        <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-gray-200">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1 min-h-[2.5rem]">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 capitalize mb-4">{item.restaurant}</p>
      </div>

      <div className="flex items-center justify-between pt-2 text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-1.5 text-gray-600">
          <TagIcon className="w-4 h-4 text-orange-400" />
          <span>{item.price}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <BoltIcon className="w-4 h-4 text-orange-400" />
          <span>{item.time}</span>
        </div>
      </div>
    </button>
  );
}

export default function PersonalizedRecommendations({
  items = defaultRecommendations,
  onSelect,
}) {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-4 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        Personalized recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item) => (
          <RecommendationCard key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}