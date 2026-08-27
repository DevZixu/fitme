function StarIcon({ className = "" }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

function SearchIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function TicketIcon({ className = "" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function QtyStepper() {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-0.5 text-xs text-gray-700">
      <button className="px-1">-</button>
      <span>1</span>
      <button className="px-1">+</button>
    </div>
  );
}

export  function SelectPage() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Header banner */}
      <div className="border-2 border-blue-400 rounded-xl bg-neutral-900 p-4 flex gap-4">
        <div className="w-32 h-24 rounded-lg bg-gradient-to-br from-orange-200 to-rose-200 shrink-0" />

        <div className="flex-1 text-white">
          <h1 className="text-lg font-bold">LunchBox - Meals and Thalis</h1>
          <p className="text-xs text-gray-400 mb-2">north indian punjabi</p>
          <div className="flex items-center gap-6 text-xs">
            <span className="flex items-center gap-1 bg-green-600 text-white rounded px-1.5 py-0.5 text-[10px] font-medium">
              <StarIcon /> 4.0
            </span>
            <span className="text-gray-300">103+ ratings</span>
            <div>
              <p className="text-gray-200 font-medium">30 Mins</p>
              <p className="text-gray-500 text-[10px]">Delivery Time</p>
            </div>
            <div>
              <p className="text-gray-200 font-medium">₹200</p>
              <p className="text-gray-500 text-[10px]">Cost for two</p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <div className="flex items-center gap-1.5 bg-neutral-800 rounded-full px-3 py-1.5 text-xs text-gray-400 w-48">
              <SearchIcon />
              Search for dishes
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-800 rounded-full px-3 py-1.5 text-xs text-gray-400 w-48">
              <SearchIcon />
              Search for restaurant
            </div>
          </div>
        </div>

        <div className="w-56 shrink-0 border border-dashed border-orange-400 rounded-lg p-3">
          <p className="text-orange-400 text-xs font-semibold mb-2">Offers</p>
          <div className="space-y-2 text-[10px] text-gray-300">
            <div className="flex items-start gap-1.5">
              <TicketIcon className="text-orange-400 mt-0.5 shrink-0" />
              <span>50% off up to ₹500 | Use code YHNEW</span>
            </div>
            <div className="flex items-start gap-1.5">
              <TicketIcon className="text-orange-400 mt-0.5 shrink-0" />
              <span>20% off | Use code PARTY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-6 p-6">
        {/* Sidebar */}
        <div className="w-36 shrink-0 border-r border-gray-200 pr-4">
          <p className="text-orange-500 text-xs font-semibold mb-3">Recommended</p>
          <ul className="space-y-3 text-xs">
            <li className="text-gray-500">Breakfast Box</li>
            <li className="text-gray-900 font-medium">Lunch Box</li>
            <li className="text-gray-500">Combo Box</li>
            <li className="text-gray-500">Biriyani Box</li>
          </ul>
        </div>

        {/* Product detail */}
        <div className="flex-1 border-r border-gray-200 pr-6">
          <h2 className="text-sm font-semibold mb-1">
            Brunch for 2 - Veg (Save upto Rs.45)
          </h2>
          <p className="text-sm text-gray-800 font-medium mb-2">₹599</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Brunch: One meal to rule them all! Grab this mega saver combo
            with your choice of 2 veg wraps, Aloo Paratha (3 pcs), chole and
            Curd lunchbox and 2 cheese lava cakes. This is just bliss on a
            plate!
          </p>
        </div>

        {/* Thumbnail + add */}
        <div className="w-28 shrink-0 border-r border-gray-200 pr-6 flex flex-col items-center gap-2">
          <div className="w-24 h-20 rounded-lg bg-gradient-to-br from-amber-100 to-orange-200" />
          <button className="bg-green-600 text-white text-xs font-semibold rounded px-4 py-1">
            Add+
          </button>
        </div>

        {/* Cart */}
        <div className="w-64 shrink-0">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold">Cart</h2>
            <span className="text-xs text-gray-400">2 Items</span>
          </div>

          <div className="space-y-3 mb-3 pb-3 border-b border-gray-200">
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Lunchbox</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Brunch for 2 - Veg</p>
                  <p className="text-xs text-gray-500">₹599</p>
                </div>
                <QtyStepper />
              </div>
            </div>
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Fasoo</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Paneer Signature Rice Bowl (Regular)</p>
                  <p className="text-xs text-gray-500">₹200</p>
                </div>
                <QtyStepper />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-semibold">Subtotal</p>
              <p className="text-[10px] text-gray-400">Extra charges may apply</p>
            </div>
            <span className="text-sm font-semibold">₹799</span>
          </div>

          <button className="w-full bg-orange-500 text-white text-sm font-medium rounded-lg py-2.5">
            Checkout
          </button>
        </div>
      </div>

      {/* Footer strip */}
      <div className="h-3 bg-orange-500" />
    </div>
  );
}