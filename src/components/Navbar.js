import React from "react";
import SteamLogo from "../assets/steam-logo-removebg-preview.png";

import { VscListFlat } from "react-icons/vsc";
import { ImDownload } from "react-icons/im";
import { VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-24 bg-[#171a21]">
      <div className="flex justify- items-center">
        {/* Left */}
        <div className="flex items-center justify-center w-full py-4 lg:justify-start lg:py-7 lg:px-8 lg:w-auto">
          <div className="text-white absolute left-4 lg:hidden">
            <VscListFlat className="text-[30px]" />
          </div>
          <div className="">
            <img src={SteamLogo} alt="" className="h-12 hover:cursor-pointer" />
          </div>
        </div>
        {/* Middle */}
        <ul className="hidden lg:flex gap-5 text-[#c5c3c0] text-[12.4px] px-10">
          <li>
            <p className="hover:cursor-pointer hover:text-white">STORE</p>
          </li>
          <li>
            <p className="hover:cursor-pointer hover:text-white">COMMUNITY</p>
          </li>
          <li>
            <p className="hover:cursor-pointer hover:text-white">ABOUT</p>
          </li>
          <li>
            <p className="hover:cursor-pointer hover:text-white">SUPPORT</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-2 items-start">
        {/* Right */}
        <div className="hidden lg:flex text-white py-2 px-8">
          <div className="flex gap-2 px-2 p-1 text-[11px] text-[#e5e4dc] bg-[#5c7e10] hover:cursor-pointer hover:text-white">
            <ImDownload className="text-[14px] text-white" />
            <p>install Steam</p>
          </div>
          <div className="flex items-center gap-2 px-2 text-[12px] text-[#b8b6b4]">
            <p className="hover:cursor-pointer hover:text-white">login</p>
            <p>|</p>
            <p className="hover:cursor-pointer hover:text-white">language</p>
            <VscTriangleDown className="hover:cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
