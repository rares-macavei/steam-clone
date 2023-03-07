import React from "react";

import sidebar from "../assets/sidebar.png";

const Sidebar = () => {
  return (
    <div className="hidden xl:flex flex-col w-[220px] h-full py-5 px-2">
      <div className="">
        <img src={sidebar} alt="" className="w-[210px] h-auto" />
        <p className="text-[#c7d5e0] text-[11px] py-1">GIFT CARDS</p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-2">
          Now available on Steam
        </p>
      </div>
      <div className="">
        <p className="text-[#c7d5e0] text-[12px] pb-[2px] pt-2">RECOMMENDED</p>
        <p className="flex text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          By Friends
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          By Curators
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Tags
        </p>
      </div>
      <div className="">
        <p className="text-[#c7d5e0] text-[12px] pb-[2px] pt-2">
          DISCOVERY QUEUES
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Recommendations
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          New releases
        </p>
      </div>
      <div className="">
        <p className="text-[#c7d5e0] text-[12px] pb-[2px] pt-2">
          BROWSE CATEGORIES
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Top Sellers
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          New Releases
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Upcoming
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Specials
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          VR Titles
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Controller-Friendly
        </p>
      </div>
      <div className="">
        <p className="text-[#c7d5e0] text-[12px] pb-[2px] pt-2">
          BROWSE BY GENRE
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Free to Play
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Action
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Adventure
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Casual
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Indie
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Racing
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          RPG
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Simulation
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Sports
        </p>
        <p className="text-[#66c0f4] hover:text-white hover:cursor-pointer text-[12px] py-[2px]">
          Strategy
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
