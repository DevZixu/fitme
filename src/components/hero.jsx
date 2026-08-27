export function Hero() {
  return (
    <section className="relative overflow-hidden px-10 py-16">
        {/* decorative blob */}
        <div className="w-32 h-32 absolute left-0"></div>
        <div className="flex items-center gap-[40px] w-full translate-x-12">
            {/* Left: copy */}
            <div className="w-fit h-fit font-display flex flex-col gap-[30px] text-nowrap text-[40px] py-10 max-w-[40rem]">
                <p className='font-display font-medium text-[#202020]'>Premium <span className="text-[#FC8019]">quality</span></p>
                <div className="flex items-center gap-3">
                    <p className="text-[#202020]">Food for your</p> 
                    <span className="bg-[#FFEDD0] px-2 py-2 rounded-[50px] w-31.25 h-18.75 relative"><img className="h-[50px] w-[46.7px] absolute" src="/Group2.svg" alt="" srcset="" />
                    </span>
                    <p className="text-[#FC8019]"> healthy</p></div>
                <div className="flex items-center gap-3">
                    <div className="bg-[#FFD0D0] px-2 py-2 rounded-[50px] relative h-[75px] w-[125px] "><img className="h-[50px] w-[46.7px] right-10 top-0.5 absolute" src="/Group1.svg" alt="" srcset="" />
                    </div><p className="text-[#FC8019]">& Daily Life</p>
                </div>
                <p className="text-[14px] font-sans leading-[25px] text-[#404040]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br></br> laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex items-center gap-[20px] w-full justify-between h-fit max-h-[49px]">
                    <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="border border-[#808080] rounded-[10px] px-[25px] py-[16px] text-sm w-full outline-none placeholder:text-[#808080]"
                    />
                    <button className="bg-[#202020] text-[#FDFBFA] text-sm font-medium px-6 py-3 rounded-[10px] whitespace-nowrap px-[25px] py-[16px]">
                    Get Started
                    </button>
                </div>

                <div className="">
                    <p className="text-xs text-gray-400 mb-2">Popular cities in India</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <span className="text-gray-700">Hyderabad</span>
                    <span className="text-orange-500">Chennai</span>
                    <span className="text-orange-500">Mumbai</span>
                    <span className="text-orange-500">Bangalore</span>
                    <span className="text-gray-700">Delhi</span>
                    <span className="text-orange-500">Kolkata</span>
                    </div>
                </div>
            </div>

            {/* Right: images */}
            <div className="flex items-center gap-[30px]">
                <img
                    src="/hero1.jpg"
                    alt="Meal prep bowls"
                    className="w-[300px] h-[500px] object-cover rounded-2xl"
                />
                <img
                    src="/hero2.jpg"
                    alt="Brunch spread"
                    className="w-[200px] h-[350px] object-cover rounded-2xl mb-10 "
                />
                <img
                    src="/hero3.jpg"
                    alt="Brunch spread"
                    className="w-[200px] h-[350px] object-cover rounded-2xl mb-10"
                />
            </div>
        </div>
    </section>
    );
}