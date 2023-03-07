import React from "react";

import { FaWindows } from "react-icons/fa";
import cover8 from "../assets/featured/forzacover.jpg";
import forzaphoto1 from "../assets/featured/forzaphoto1.jpg";
import forzaphoto2 from "../assets/featured/forzaphoto2.jpg";
import forzaphoto3 from "../assets/featured/forzaphoto3.jpg";
import forzaphoto4 from "../assets/featured/forzaphoto4.jpg";

const Featured = () => {
  return (
    <div className="flex justify-center px-[2%] py-[20px]">
      <div className="relative w-[980px] hover:cursor-pointer">
        {/* Title */}
        <p className="text-white pb-3 tracking-[0.03rem] text-[14px]">
          FEATURED & RECOMENDED
        </p>
        {/* Featured */}
        <div className="h-[380px] w-full flex">
          <div className="w-[65%] h-full">
            <img src={cover8} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="flex items-start w-[35%] h-full bg-[#0f1922] flex-col justify-center">
            <p className="text-[24px] pl-4 py-4 text-white mt-3">
              Forza Horizon 5
            </p>
            <div className="px-2 w-full h-[18rem] pt-3">
              <div className="h-[25%] w-full flex pb-1">
                <img
                  src={forzaphoto1}
                  alt=""
                  className="object-cover w-[50%] pb-[1px] pr-1"
                />
                <img
                  src={forzaphoto2}
                  alt=""
                  className="object-cover w-[50%] pb-[1px] pl-1"
                />
              </div>
              <div className="h-[25%] w-full flex pt-1">
                <img
                  src={forzaphoto3}
                  alt=""
                  className="object-cover w-[50%] pt-[1px] pr-1"
                />
                <img
                  src={forzaphoto4}
                  alt=""
                  className="object-cover w-[50%] pt-[1px] pl-1"
                />
              </div>
              <div className="flex flex-col pt-4 pl-2">
                <p className="text-white text-[20px]">Now Available</p>
                <div className="flex pt-[1px]">
                  <p className="text-white text-[10px] px-[4px] py-1 bg-[#3b434a] rounded-sm">
                    Top seller
                  </p>
                </div>
                <div className="flex justify-between pt-10">
                  <p className="text-white text-[11px]">59,99$</p>
                  <FaWindows className="text-[#b5b8bb]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
