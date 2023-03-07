import React from "react";

import { BiSearch } from "react-icons/bi";

const Categories = () => {
  return (
    <div className="hidden lg:flex justify-center pt-8 pb-4">
      <div className="flex justify-center items-center bg-gradient-to-r from-[#3b6490] to-[#1a377c]">
        <div className="flex gap-8 pr-[84px] className= hover:cursor-pointer text-white items-center justify-center ">
          <ul className="flex text-[12px]">
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#385f8e]">
              <p>Your Store</p>
            </li>
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#33598b]">
              <p>New & Noteworthy</p>
            </li>
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#2f5389]">
              <p>Categories</p>
            </li>
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#2b4f87]">
              <p>Points Shop</p>
            </li>
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#294b85]">
              <p>News</p>
            </li>
            <li className="py-2 px-4 hover:bg-gradient-to-r from-[#5085bf] to-[#274884]">
              <p>Labs</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end px-1 pl-[84px]">
          <input
            type="search"
            placeholder="search"
            className="pl-3 pr-9 py-[3px] placeholder-[#0e1c25] shadow-md font-light text-[14px] italic text-black bg-[#316282] outline-none rounded-sm hover:cursor-pointer hover:outline-[#1A9FFF] hover:outline-[0.5px]"
          />
          <BiSearch className="absolute p-1 bg-[#1A9FFF] text-[24px] mr-[2px] rounded-sm hover:cursor-pointer hover:bg-[#54b8ff] " />
        </div>
      </div>
    </div>
  );
};

export default Categories;
