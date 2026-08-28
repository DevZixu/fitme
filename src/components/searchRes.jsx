import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Paneer Tikka Rice Bowl",
    imgurl: "rice1.png",
    restaurant: "The Good Bowl",
    price: "₹200",
    time: "20 Mins",
    color: "bg-orange-700",
  },
  {
    id: 2,
    name: "Dal Fry Rice Bowl - Fried With Ghee",
    imgurl: "rice2.png",
    restaurant: "The Good Bowl",
    price: "₹180",
    time: "20 Mins",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    name: "Butter Paneer Rice Bowl Large",
    imgurl: "rice3.png",
    restaurant: "The Good Bowl",
    price: "₹299",
    time: "20 Mins",
    color: "bg-stone-200",
  },
  {
    id:4,
    name: "Paneer Signature Rice Bowl (Regular)",
    imgurl: "rice4.png",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹200",
    time: "20 Mins",
    color: "bg-orange-700",
  },
  {
    id:5,
    name: "Chicken Signature Rice Bowl",
    imgurl: "rice5.png",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹180",
    time: "20 Mins",
    color: "bg-red-600",
  },
  {
    id:6,
    name: "Royal Chicken Rice Bowl (Jumbo)",
    imgurl: "rice6.png",
    restaurant: "Fasoo - Wraps & Bowls",
    price: "₹299",
    time: "20 Mins",
    color: "bg-orange-600",
  },
];


function DishCard({ dish }) {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? '';
  
  return (
    <Link to={`/selected/${dish.id}`} className="flex gap-[30px] items-center">
      <div className="w-[128px] h-[128px] p-2 shrink-0">
        <img src={dish.imgurl} alt="dish image" className="w-full h-full object-cover rounded-[10px]" />
      </div>
      <div className="flex flex-col font-display justify-center gap-2.5">
        <h3 className="text-[18px] font-medium text-[#202020]">
          {dish.name}
        </h3>
        <p className="text-[14px] text-gray-400 mb-1.5">{dish.restaurant}</p>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-[14px] font-medium text-[#202020]">
            <img src="/tag.svg" alt="" className="w-4 h-4"/>
            {dish.price}
          </span>
          <span className="flex items-center gap-1 text-[14px] text-[#202020] font-medium">
            <img src="/time.svg" alt="" className="w-4 h-4"/>
            {dish.time}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function SearchResults() {
  const rowOne = dishes.slice(0, 3);
  const rowTwo = dishes.slice(3, 6);
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? '';

  return (
    <div className="bg-white max-w-6xl mx-auto pb-[5.3rem] mt-6">
      <h2 className="text-[24px] font-medium font-display text-[#000000] mb-4">
        Search results for " {query}"
      </h2>

      <div className="flex gap-2.5 mb-5">
        <button className="rounded-[20px] text-center px-[30px] py-[16px] text-[14px] font-medium bg-orange-500 text-white">
          Dishes
        </button>
        <button className="rounded-[20px] text-center border border-[#FC8019] px-[30px] py-[16px]  text-[14px] font-medium bg-white text-[#202020]">
          Restaurants
        </button>
      </div>

      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-3 gap-4 mb-1.5">
          {rowOne.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
        <div className="flex justify-end mb-5">
          <a href="#" className="text-[16px] font-medium font-display text-[#FC8019]">
            View More &gt;
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-1.5">
          {rowTwo.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
        <div className="flex justify-end mb-5">
          <a href="#" className="text-[16px] font-medium font-display text-[#FC8019]">
            View More &gt;
          </a>
        </div>
      </div>
      
    </div>
  );
}