const defaultCategories = [
  { id: 1, name: 'Sandwich', imageUrl: '/sandwich.jpg' },
  { id: 2, name: 'North Indian Thali', imageUrl: '/NorthThai.png' },
  { id: 3, name: 'Egg Breakfast', imageUrl: '/rolls.png' },
  { id: 4, name: 'Rolls & Puffs', imageUrl: '/rolls.png' },
  { id: 5, name: 'Salads', imageUrl: '/salad.png' },
  { id: 6, name: 'Biryani Box', imageUrl: '/briyani.png' },
];

function CategoryItem({ category, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(category)}
      aria-pressed={isSelected}
      className="flex flex-col items-center gap-3 min-w-[90px] "
    >
      <div
        className={`w-[140px] h-[140px] rounded-full overflow-hidden ${
          isSelected ? 'ring-2 ring-[#f37021]' : ''
        }`}
      >
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover "
        />
      </div>

      <span className="text-[16px] mt-2 font-medium text-center ">
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
    <div className="w-full max-w-6xl mx-auto px-4 bg-white py-24">
      <h2 className="text-[24px] font-display font-medium text-[#202020] mb-6">
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