import React, { useEffect, useState } from "react";

export default function SampleProduct() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // detect window screen width function
      setWidth(window.innerWidth);
    }
  }, []);
  return (
    <div className="productContainer">
      <div className="productText  p-10">
        <img
        width="100%"
        height="100%"
          src={`/magnehole.jpg`}
          alt="manyetik kum kolye"
          className="shadow-lg p-10 productTextImage"
        ></img>
        <img
        width="100%"
        height="100%"
          src={`/new-tr.webp`}
         
          alt={`/new-tr.jpg`}
          className="shadow-lg p-10 productTextImage"
        ></img>
      </div>
      <img
      width="100%"
      height="100%"
        src="/pure.jpg"
        src={`/pure${width<600?"_mobile":""}.jpg`}
        alt="manyetik kum kolye"
        className="shadow-lg p-10 productContainerImage"
      ></img>
    </div>
  );
}
