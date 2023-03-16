import React from "react";

import FarCry from "../assets/special/farcry.jpg";
import StarWars from "../assets/special/starwars.jpg";
import F1 from "../assets/special/f22.jpg";
import Red from "../assets/special/reddead.jpg";

const Special = () => {
  return (
    <div>
      <div className="flex justify-center py-8">
        <div className="relative w-[360px] sm:w-[940px]">
          <p className="text-white pb-3 tracking-[0.03rem] text-[10px] sm:text-[14px]">
            SPECIAL OFFERS
          </p>
          <div className="flex gap-2 sm:gap-4">
            <div className="flex gap-2 sm:gap-4">
              <div className="w-[115px] sm:w-[306px] h-[180px] sm:h-[350px] hover:cursor-pointer">
                <img src={StarWars} alt="" className="" />
                <div className="absolute -mt-[24px] sm:-mt-[78px] h-[56px] sm:h-[113px] w-[115px] sm:w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] ">
                  <div className="flex flex-col py-[4px] pl-2 sm:pl-6 ">
                    <p className="text-[10px] sm:text-[14px] pb-1 text-white pt-1">
                      WEEKEND OFFER
                    </p>
                    <p className="hidden sm:flex text-white pt-1 text-[7px] sm:text-[11px]">
                      This offer is availible until the end of the weekend!
                    </p>
                    <div className="flex pl-6 sm:pl-[120px]">
                      <p className="text-[10px] sm:text-[22px] text-[#BEEE11] pt-[3px] px-1 bg-[#4c6b22]">
                        -60%
                      </p>
                      <div className="px-2 bg-[#022c4b]">
                        <p className="flex justify-end text-[6px] sm:text-[10px] text-[#738895]">
                          49,99€
                        </p>
                        <p className="text-[8px] sm:text-[13px] text-[#BEEE11]">
                          19,99€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[115px] sm:w-[306px] h-[180px] sm:h-[350px] hover:cursor-pointer">
                <img src={F1} alt="" className="" />
                <div className="absolute -mt-[24px] sm:-mt-[78px] h-[56px] sm:h-[113px] w-[115px] sm:w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6]">
                  <div className="flex flex-col py-[4px] pl-2 sm:pl-6 ">
                    <p className="text-[10px] sm:text-[14px] pb-1 text-white pt-1">
                      WEEKEND OFFER
                    </p>
                    <p className="hidden sm:flex text-white pt-1 text-[7px] sm:text-[11px]">
                      This offer is availible until the end of the weekend!
                    </p>
                    <div className="flex pl-8 sm:pl-[120px]">
                      <p className="text-[10px] sm:text-[22px] text-[#BEEE11] pt-[3px] px-1 bg-[#4c6b22]">
                        -70%
                      </p>
                      <div className="px-1 bg-[#022c4b]">
                        <p className="flex justify-end text-[6px] sm:text-[10px] text-[#738895]">
                          54,99€
                        </p>
                        <p className="text-[8px] sm:text-[13px] text-[#BEEE11]">
                          16,49€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-14 flex-col">
              <div className="w-[115px] sm:w-[306px] h-[72px] sm:h-[143px] hover:cursor-pointer">
                <img src={Red} alt="" className="" />
                <div className="h-[23px] sm:h-[43px] w-[115px] sm:w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] absolute">
                  <div className="flex justify-end items-center py-[4px] px-1">
                    <p className="text-[12px] sm:text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                      -67%
                    </p>
                    <div className="px-1 bg-[#022c4b]">
                      <p className="flex justify-end text-[6px] sm:text-[10px] text-[#738895]">
                        59,99€
                      </p>
                      <p className="text-[7px] sm:text-[13px] text-[#BEEE11]">
                        19,79€
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[115px] sm:w-[306px] h-[72px] sm:h-[143px] hover:cursor-pointer">
                <img src={FarCry} alt="" className="" />
                <div className="h-[23px] sm:h-[43px] w-[115px] sm:w-[306px] bg-gradient-to-br from-[#1a5a7e] to-[#237fa6] absolute">
                  <div className="flex justify-end items-center py-[4px] px-1">
                    <p className="text-[12px] sm:text-[22px] text-[#BEEE11] px-1 bg-[#4c6b22]">
                      -85%
                    </p>
                    <div className="px-1 bg-[#022c4b]">
                      <p className="flex justify-end text-[6px] sm:text-[10px] text-[#738895]">
                        59,99€
                      </p>
                      <p className="text-[7px] sm:text-[13px] text-[#BEEE11]">
                        8,99€
                      </p>
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