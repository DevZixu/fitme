export function Header() {
  return (
    <header className="flex items-center justify-between mx-16 px-10 py-10  h-fit">
      <div className="flex items-center w-fit gap-x-2">
        <img src="/Subtract.svg" alt="" className="h-7" />
        <h1 className="font-semibold text-lg">FitMe</h1>
      </div>

      <div className="flex items-center gap-[10px] h-fit w-fit">
        <div className="flex items-center border rounded-[8px] w-[400px] gap-4 justify-between px-3 py-2">
          <input
            type="text"
            className="placeholder:text-[16px] outline-none w-full"
            placeholder="Enter item or restaurant you are looking for"
          />
          <img src="/Vector.svg" alt="" />
        </div>

        <img src="/Bag.png" alt="cart" className="h-6 cursor-pointer" />

        <button className="bg-[#202020] h-fit w-fit text-white text-sm font-medium px-[20px] py-[12px] rounded-[10px]">
          Sign In
        </button>
      </div>
    </header>
  );
}