import { Link, useParams } from 'react-router-dom';
import { defaultRecommendations } from './recommendations';
import { useState } from 'react';

export default function Selected() {
  let [first, setFirst] = useState(1)
  let [second, setSecond] = useState(1)
  const { id } = useParams();
  const item = defaultRecommendations.find((i) => String(i.id) === id);

  if (!item) {
    return <p className="p-8 text-gray-500">Item not found.</p>;
  }

  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Header banner */}
      <div className=" bg-neutral-900 p-4 flex gap-4 py-[25px] px-[100px]">
        <div className="w-36 h-32 rounded-lg overflow-hidden shrink-0">
          <img src={item.imageUrl} alt={item.restaurant} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 text-white">
          <h1 className="text-lg font-bold">{item.restaurant}</h1>
          <p className="text-xs text-gray-400 mb-2">north indian punjabi</p>
          <div className="flex items-center gap-6 text-xs">
            <span className="flex items-center gap-1 bg-green-600 text-white rounded px-1.5 py-0.5 text-[10px] font-medium">
              4.0
            </span>
            <span className="text-gray-300">103+ ratings</span>
            <div>
              <p className="text-gray-200 font-medium">{item.time}</p>
              <p className="text-gray-500 text-[10px]">Delivery Time</p>
            </div>
            <div>
              <p className="text-gray-200 font-medium">{item.price}</p>
              <p className="text-gray-500 text-[10px]">Cost for two</p>
            </div>
          </div>
        </div>

        <div className="w-56 shrink-0 border border-dashed border-orange-400 rounded-lg p-3">
          <p className="text-orange-400 text-xs font-semibold mb-2">Offers</p>
          <div className="space-y-2 text-[10px] text-gray-300">
            <div className="flex items-start gap-1.5">
              <span>50% off up to ₹500 | Use code YHNEW</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span>20% off | Use code PARTY</span>
            </div>
          </div>
        </div>
      </div>

      {/*  search + favourite bar */}
      <div className="relative z-10 flex justify-center -mt-[25px]">
        <div className="flex w-[580px] h-[50px] rounded-lg gap-5 borderoverflow-hidden">
          <div className="flex items-center gap-4 px-4 w-[350px] rounded-[10px] h-fit p-[12px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] font-sans">
            <input
              type="text"
              placeholder="Search for dish"
              className="flex-1 text-sm outline-none"
            />
            <img src="/Vector.svg" alt="" className="w-4 h-4 shrink-0" />
          </div>
          <div className='w-[130px] h-fit p-[10px] rounded-[10px] bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] flex items-center justify-center'>
            <button
              type="button"
              className="flex items-center gap-2 text-[14px] text-[#404040] font-sans font-medium shrink-0"
            >
              <img src="/favorite.svg" alt="" className="w-6 h-6 pl-2 shrink-0" />
              
              Favourite
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-6 p-6 pt-8 max-w-6xl justify-center mx-auto pt-8 pb-16">
        {/* Sidebar */}
        <div className="w-36 shrink-0 border-r border-[#202020]/50 pr-4">
          <p className="text-orange-500 text-xs font-semibold mb-3">Recommended</p>
          <ul className="space-y-3 text-xs">
            <li className="text-gray-500">Breakfast Box</li>
            <li className="text-gray-900 font-medium">Lunch Box</li>
            <li className="text-gray-500">Combo Box</li>
            <li className="text-gray-500">Biriyani Box</li>
          </ul>
        </div>

        {/* Product detail */}
        <div className="flex-1 pr-6">
          <h2 className="text-sm font-semibold mb-1">{item.title}</h2>
          <p className="text-sm text-gray-800 font-medium mb-2">{item.price}</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Brunch: One meal to rule them all! Grab this mega saver combo
            with your choice of 2 veg wraps, Aloo Paratha (3 pcs), chole and
            Curd lunchbox and 2 cheese lava cakes. This is just bliss on a
            plate!
          </p>
        </div>

        {/* Thumbnail + add */}
        <div className="w-28 shrink-0 pr-6 flex flex-col items-center gap-2">
          <div className="w-26 h-24 rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <button className="bg-green-600 text-white text-xs font-semibold rounded px-4 py-1">
            Add+
          </button>
        </div>

        {/* Cart */}
        <div className="w-64 shrink-0 text-[#202020]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[18px] font-display font-semibold">Cart</h2>
            <span className="text-[14px]">2 Items</span>
          </div>

          <div className="flex flex-col gap-4 mb-3 pb-3">
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Lunchbox</p>
              <div className="flex items-center justify-between">
                <div className='flex flex-col gap-3'>
                  <p className="text-xs font-medium">Brunch for 2 - Veg</p>
                  <p className="text-xs text-gray-500">₹599</p>
                </div>
                <div className='flex gap-3'>
                  <button onClick={()=> { if(first != 0 ) setFirst(first - 1) }}>-</button>
                  <p>{first}</p>
                  <button onClick={()=> setFirst(first + 1)}>+</button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Fasoo</p>
              <div className="flex items-center justify-between">
                <div className='flex flex-col gap-3'>
                  <p className="text-xs font-medium">Paneer Signature Rice Bowl (Regular)</p>
                  <p className="text-xs text-gray-500">₹200</p>
                </div>
                <div className='flex gap-3'>
                  <button onClick={()=> { if (second != 0) {setSecond(second - 1)}}}>-</button>
                  <p>{second}</p>
                  <button onClick={()=> setSecond(second + 1)}>+</button>
                </div>
              </div>
   
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className='space-y-1'>
              <p className="text-[14px] font-semibold">Subtotal</p>
              <p className="text-[10px] text-gray-400">Extra charges may apply</p>
            </div>
            <span className="text-[14px] font-semibold">₹799</span>
          </div>

          <Link
            to="/checkout"
            className="w-full block text-center bg-orange-500 text-white text-sm font-medium rounded-lg py-2.5"
          >
            Checkout
          </Link>
        </div>
      </div>

      {/* Footer strip */}
      <div className="h-3 bg-orange-500" />
    </div>
  );
}