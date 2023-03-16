import React from "react";

import console1 from "../assets/steamdesk.gif";
import console2 from "../assets/valveindex.jpg";

const Consoles = () => {
  return (
    <div>
      <div className="flex justify-center sm:pb-16 sm:mt-16 sm:ml-2 gap-2 sm:gap-5">
        <img
          src={console1}
          alt=""
          className="w-[360px] h-[80px] sm:w-[620px] sm:h-[140px] hover:cursor-pointer hover:drop-shadow-[5px_5px_9px_rgb(255,105,180)]"
        />
        <img
          src={console2}
          alt=""
          className="hidden sm:flex hover:cursor-pointer hover:drop-shadow-[5px_5px_9px_rgb(255,105,180)]"
        />
      </div>
    </div>
  );
};

export default Consoles;