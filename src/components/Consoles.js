import React from "react";

import console1 from "../assets/steamdesk.gif";
import console2 from "../assets/valveindex.jpg";

const Consoles = () => {
  return (
    <div>
      <div className="flex justify-center pb-16 mt-16 ml-2 gap-5">
        <img
          src={console1}
          alt=""
          className="hover:cursor-pointer hover:drop-shadow-[5px_5px_9px_rgb(255,105,180)]"
        />
        <img
          src={console2}
          alt=""
          className="hover:cursor-pointer hover:drop-shadow-[5px_5px_9px_rgb(255,105,180)]"
        />
      </div>
    </div>
  );
};

export default Consoles;
