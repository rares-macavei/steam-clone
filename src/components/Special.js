import React from "react";

import FarCry from "../assets/special/farcry.jpg";
import StarWars from "../assets/special/starwars.jpg";
import F1 from "../assets/special/f22.jpg";
import Red from "../assets/special/reddead.jpg";

const Special = () => {
  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="relative w-[940px]">
          <p className="text-white pb-3 tracking-[0.03rem] text-[14px]">
            SPECIAL OFFERS
          </p>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <div className="w-[306px] h-[350px] hover:cursor-pointer">
                <img src={StarWars} alt="" className="" />
                <div className="absolute -mt-[78px] h-[113px] w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] ">
                  <div className="flex flex-col py-[4px] pl-6 ">
                    <p className="text-white pt-1">WEEKEND OFFER</p>
                    <p className="text-white pt-1 text-[11px]">
                      This offer is availible until the end of the weekend!
                    </p>
                    <div className="flex pt-1">
                      <p className=" text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                        -60%
                      </p>
                      <div className="px-1 bg-[#022c4b]">
                        <p className="flex justify-end text-[10px] text-[#738895]">
                          49,99€
                        </p>
                        <p className="text-[13px] text-[#BEEE11]">19,99€</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[306px] h-[350px] hover:cursor-pointer">
                <img src={F1} alt="" className="" />
                <div className="absolute -mt-[78px] h-[113px] w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6]">
                  <div className="flex flex-col py-[4px] pl-6 ">
                    <p className="text-white pt-1">WEEKEND OFFER</p>
                    <p className="text-white pt-1 text-[11px]">
                      This offer is availible until the end of the weekend!
                    </p>
                    <div className="flex pt-1">
                      <p className=" text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                        -70%
                      </p>
                      <div className="px-1 bg-[#022c4b]">
                        <p className="flex justify-end text-[10px] text-[#738895]">
                          54,99€
                        </p>
                        <p className="text-[13px] text-[#BEEE11]">16,49€</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-14 flex-col">
              <div className="w-[306px] h-[143px] hover:cursor-pointer">
                <img src={Red} alt="" className="" />
                <div className="h-[43px] w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] absolute">
                  <div className="flex justify-end items-center py-[4px] px-1">
                    <p className=" text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                      -67%
                    </p>
                    <div className="px-1 bg-[#022c4b]">
                      <p className="flex justify-end text-[10px] text-[#738895]">
                        59,99€
                      </p>
                      <p className="text-[13px] text-[#BEEE11]">19,79€</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[306px] h-[143px] hover:cursor-pointer">
                <img src={FarCry} alt="" className="" />
                <div className="h-[43px] w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] absolute">
                  <div className="flex justify-end items-center py-[4px] px-1">
                    <p className=" text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                      -85%
                    </p>
                    <div className="px-1 bg-[#022c4b]">
                      <p className="flex justify-end text-[10px] text-[#738895]">
                        59,99€
                      </p>
                      <p className="text-[13px] text-[#BEEE11]">8,99€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
