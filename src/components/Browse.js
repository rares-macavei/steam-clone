import React from "react";

import Action from "../assets/browse/action.png";
import Racing from "../assets/browse/racing.png";
import Casual from "../assets/browse/casual.png";
import Fights from "../assets/browse/fight.png";

const Browse = () => {
  return (
    <div className="flex justify-center pb-16">
      <div className="relative w-[940px]">
        <p className="text-white pb-3 tracking-[0.03rem] text-[14px]">
          BROWSE BY CATEGORY
        </p>
        <div className="flex gap-4">
          <img
            src={Action}
            alt=""
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:cursor-pointer"
          />
          <img
            src={Racing}
            alt=""
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:cursor-pointer"
          />
          <img
            src={Casual}
            alt=""
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:cursor-pointer"
          />
          <img
            src={Fights}
            alt=""
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
