import React from "react";

import Valve from "../assets/valve.png";
import Steam from "../assets/steam-logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className="h-[183px] w-full bg-[#171a21]">
      <div className="flex justify-center pt-14">
        <div className="flex">
          <img src={Valve} alt="" className="h-8 pr-4" />
          <div className="flex flex-col">
            <p className="text-[#8F98A0] text-[11px]">
              © 2023 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
            </p>
            <p className="text-[#8F98A0] text-[11px]">
              VAT included in all prices where applicable.{" "}
              <a href="a" className="text-[#C6D4DF] hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="a" className="text-[#C6D4DF] hover:text-white">
                Steam Subscriber Agreement
              </a>{" "}
              |{" "}
              <a href="a" className="text-[#C6D4DF] hover:text-white">
                Legal
              </a>{" "}
              |{" "}
              <a href="a" className="text-[#C6D4DF] hover:text-white">
                Refunds
              </a>{" "}
              |{" "}
              <a href="a" className="text-[#C6D4DF] hover:text-white">
                Cookies
              </a>
            </p>
          </div>
          <img src={Steam} alt="" className="h-8 pl-4" />
        </div>
      </div>

      <div className="flex justify-center text-[12px] gap-2 pt-1">
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          About Valve
        </a>
        <p className="text-[#C6D4DF]">|</p>
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          Jobs
        </a>
        <p className="text-[#C6D4DF]">|</p>
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          Steamworks
        </a>
        <p className="text-[#C6D4DF]">|</p>
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          Steam Distribution
        </a>
        <p className="text-[#C6D4DF]">|</p>
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          Support
        </a>
        <p className="text-[#C6D4DF]">|</p>
        <a href="a" className="text-[#C6D4DF] hover:text-white">
          Gift Cards
        </a>
      </div>
    </div>
  );
};

export default Footer;
