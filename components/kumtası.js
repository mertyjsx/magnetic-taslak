import React, { useEffect } from "react";

import foto from "../public/new-tr.webp";

export default function Home() {
  return (
    <div className="kolyeContainer items-center relative">
      <div className="yazı ">
        <h2 className="üst text-5xl md:text-4xl lg:text-6xl">Magnetite</h2>

        <h6 className="alt text-4xl md:text-3xl lg:text-4xl">jewelry.</h6>
      </div>

      <div className="yazı2 ">
        <h2 className="üst text-5xl md:text-4xl lg:text-6xl">Sea sand </h2>


          <h6 className="alt text-4xl md:text-1xl lg:text-4xl">
            into stone <br></br> as a result of<br></br> long processes.
          </h6>
      
      </div>

      <img className="kolye" src={foto} alt="magnetic jewelry"></img>
    </div>
  );
}
