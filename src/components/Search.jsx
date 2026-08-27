import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function RestaurantSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
    navigate('/search')
  };


  return (
    <div className="w-full bg-[#f37021] py-5 px-4 flex justify-center items-center h-[150px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-4xl justify-center"
      >
        <button
          type="button"
          className="flex font-semibold text-[24px] font-display items-center gap-2 text-white"
        >
          Search by Restaurant
          <img className='ml-[10px]' src="/searchArrow.svg" alt="" />
        </button>

        <label htmlFor="restaurant-search" className="sr-only">
          Search for an item or restaurant
        </label>
        <input
          id="restaurant-search"
          type="text"
          value = {query}
          onChange={(e)=> setQuery(e.target.value)}
          placeholder="Enter item or restaurant you are looking for"
          className="w-full max-w-sm border border-white/50 text-white  placeholder-white/50 rounded-[10px] px-[20px] py-[8px] "
        />

        <button
          type="submit"
          className="bg-[#202020] rounded-[10px] text-white text-xs md:text-sm font-medium py-2.5 px-6 hover:bg-black transition-colors duration-200 shrink-0"
        >
          Search Now
        </button>
      </form>
    </div>
  );
}