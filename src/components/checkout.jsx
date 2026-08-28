
export default function CheckoutUI() {
  return (
    <div className="bg-white p-6 font-sans text-gray-900 flex flex-col justify-center items-center">
      <h1 className="text-base font-semibold mb-6 pb-2 border-b border-[#202020] items-stretch w-[80%]">
        Secure Checkout
      </h1>

      <div className="flex gap-8">
        {/* Left / main column */}
        <div className="flex-1 max-w-2xl">
          {/* Delivery address */}
          <div className="flex items-center gap-1.5 text-sm font-semibold mb-3">
            
            <span>Delivery address</span>
          </div>

          <div className="flex gap-3 mb-6">
            <div className="flex items-start gap-2 flex-1 rounded-lg border-2 border-blue-400 bg-orange-500 text-white p-3">
              
              <p className="text-xs leading-snug">
                Dno. 12-34-12, KYC Apartments, DOOR Colony, Hyderabad, Telangana
              </p>
            </div>
            <div className="flex items-start gap-2 flex-1 rounded-lg border border-dashed border-gray-300 p-3">
              
              <p className="text-xs leading-snug text-gray-500">
                Dno. 12-34-12, KYC Apartments, DOOR Colony, Hyderabad, Telangana
              </p>
            </div>
          </div>

          {/* Type of order */}
          <div className="flex items-center gap-1.5 text-sm font-semibold mb-3">
            
            <span>Type of Order</span>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="flex items-center gap-2 bg-orange-500 text-white text-xs font-medium rounded-lg px-4 py-2.5">
               Subscription
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg px-4 py-2.5">
               Schedule Order
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg px-4 py-2.5">
              Order Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Left sub-column */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2">Type of subscription ?</p>
              <div className="flex gap-6 text-xs mb-6 pb-2 border-b border-gray-200">
                <span className="text-orange-500 font-medium border-b-2 border-orange-500 pb-2 -mb-2">
                  Monthly
                </span>
                <span className="text-gray-500">Weekly</span>
                <span className="text-gray-500">Custom</span>
              </div>

              <p className="text-xs font-medium text-gray-700 mb-2">
                What time do you want us to deliver?
              </p>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-1.5">
               
                  <span>18:30</span>
                </div>
                <span className="text-orange-500 font-medium">24 Hrs</span>
              </div>
            </div>

            {/* Right sub-column */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2">What's the plan?</p>
              <div className="flex gap-3 mb-6">
                <button className="border-2 border-orange-400 text-orange-600 text-xs font-medium rounded-lg px-4 py-2">
                  3 Days/Week
                </button>
                <button className="border border-gray-300 text-gray-700 text-xs font-medium rounded-lg px-4 py-2">
                  5 Days/Week
                </button>
              </div>

              <p className="text-xs font-medium text-gray-700 mb-2">Any Note for us?</p>
              <textarea
                readOnly
                placeholder="type you note here"
                className="w-full text-xs border border-gray-300 rounded-lg p-2.5 h-20 resize-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Right / cart column */}
        <div className="w-72 shrink-0 bg-gray-50 rounded-xl p-4 h-fit">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold">Cart</h2>
            <span className="text-xs text-gray-400">2 items</span>
          </div>

          <div className="space-y-3 mb-3 pb-3 border-b border-gray-200">
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Lunch box</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Brunch for 2 - Veg</p>
                  <p className="text-xs text-gray-500">₹599</p>
                </div>
      
              </div>
            </div>
            <div>
              <p className="text-[11px] text-orange-500 font-medium mb-1">from Fasoo</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">Paneer Signature Rice Bowl (Regular)</p>
                  <p className="text-xs text-gray-500">₹200</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs font-semibold mb-2">Bill details</p>
          <div className="space-y-1.5 text-[11px] text-gray-600 mb-3 pb-3 border-b border-gray-200">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹799.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee (10 % extra for Custom Delivery time)</span>
              <span>₹59.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes and Charges (i)</span>
              <span>₹20.00</span>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 mb-3">
            Monthly + 3 Days/Week plan + 18:30 Delivery time
          </p>

          <div className="space-y-1.5 text-xs mb-3 pb-3 border-b border-gray-200">
            <div className="flex justify-between text-gray-600">
              <span>Total</span>
              <span>₹9,800.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span>-₹4000.00</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold">Total</span>
            <span className="text-base font-bold">₹7,400.00</span>
          </div>

          <button className="w-full bg-orange-500 text-white text-sm font-medium rounded-lg py-2.5">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}