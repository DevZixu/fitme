import { useState } from 'react';

function ChevronDownIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function RestaurantSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <div className="w-full bg-[#f37021] py-5 px-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-4xl justify-center"
      >
        <button
          type="button"
          className="flex items-center gap-2 text-white text-sm md:text-base font-semibold tracking-wide"
        >
          Search by Restaurant
          <ChevronDownIcon />
        </button>

        <label htmlFor="restaurant-search" className="sr-only">
          Search for an item or restaurant
        </label>
        <input
          id="restaurant-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter item or restaurant you are looking for"
          className="w-full max-w-sm bg-transparent border border-white/50 text-white text-xs md:text-sm placeholder-white/80 rounded px-4 py-2.5 focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
        />

        <button
          type="submit"
          className="bg-[#242424] text-white text-xs md:text-sm font-medium py-2.5 px-6 rounded hover:bg-black transition-colors duration-200 shrink-0"
        >
          Search Now
        </button>
      </form>
    </div>
  );
}