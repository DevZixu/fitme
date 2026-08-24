const defaultCategories = [
  { id: 1, name: 'Sandwich', imageUrl: '/categories/sandwich.jpg' },
  { id: 2, name: 'North Indian Thali', imageUrl: '/categories/thali.jpg' },
  { id: 3, name: 'Egg Breakfast', imageUrl: '/categories/egg-breakfast.jpg' },
  { id: 4, name: 'Rolls & Puffs', imageUrl: '/categories/rolls-puffs.jpg' },
  { id: 5, name: 'Salads', imageUrl: '/categories/salads.jpg' },
  { id: 6, name: 'Biryani Box', imageUrl: '/categories/biryani-box.jpg' },
];

function CategoryItem({ category, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(category)}
      aria-pressed={isSelected}
      className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[120px] group"
    >
      <div
        className={`w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-sm ring-offset-2 transition-shadow ${
          isSelected ? 'ring-2 ring-[#f37021]' : ''
        }`}
      >
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      <span className="text-xs md:text-sm font-medium text-gray-700 text-center">
        {category.name}
      </span>
    </button>
  );
}

export default function FoodCategories({
  categories = defaultCategories,
  selectedId,
  onSelect,
}) {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 tracking-tight">
        What's on your mind?
      </h2>

      <div className="flex items-center justify-between gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isSelected={category.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}