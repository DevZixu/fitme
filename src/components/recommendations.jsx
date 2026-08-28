import { Link } from 'react-router-dom';

 export const defaultRecommendations = [
  {
    id: 1,
    title: 'Baked Pizza Wrap - Vegetarian',
    restaurant: 'Faasos - wraps & rolls',
    price: '₹209',
    time: '31 Mins',
    imageUrl: '/baked.png',
  },
  {
    id: 2,
    title: 'Butter Chicken Pizza - 8 Serve',
    restaurant: 'ovenstory pizza',
    price: '₹299',
    time: '26 Mins',
    imageUrl: '/pizza.png',
  },
  {
    id: 3,
    title: 'Mexican Patty Signature Wrap',
    restaurant: 'subway',
    price: '₹273',
    time: '32 Mins',
    imageUrl: '/mexican.png',
  },
  {
    id: 4,
    title: 'Southwest Chicken Salad',
    restaurant: 'beagento',
    price: '₹220',
    time: '41 Mins',
    imageUrl: '/chicken.png',
  },
];

function RecommendationCard({ item }) {
  return (
    <Link
      to={`/selected/${item.id}`}
      className="bg-[#f5f5f5] rounded-2xl p-3 flex flex-col justify-between text-left w-[15rem]"
    >
      <div className="px-2 pt-1 font-display flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden mb-3 bg-gray-200 w-full h-[200px]">
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-medium text-[#202020] text-[18px]">
          {item.title}
        </h3>
        <p className="text-[16px] font-medium font-display text-[#808080] capitalize mb-4">{item.restaurant}</p>
      </div>

      <div className="flex items-center justify-between pt-2 text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-1.5 text-gray-600">
          <img src="/tag.svg" alt="" />
          <span>{item.price}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <img src="/time.svg" alt="" />
          <span>{item.time}</span>
        </div>
      </div>
    </Link>
  );
}

export default function PersonalizedRecommendations({ items = defaultRecommendations }) {
  return (
    <section className="w-full max-w-6xl mx-auto py-8 px-4 bg-white mb-12">
      <h2 className="text-[24px] font-display font-medium text-[#202020] mb-6">
        Personalized recommendations
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {items.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}