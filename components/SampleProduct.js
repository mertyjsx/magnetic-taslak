import React, { useEffect, useState } from "react";
import Image from "next/image"
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
      <div className="productText  p-10" style={{maxWidth:"50%"}}>
      <figure> 
        <img
        width="100%"
        height="100%"
        src={`/desen${width<600?"_mobile":""}.jpg`}
         
          alt={`/new-tr.jpg`}
          className="shadow-lg p-10 productTextImage"
        ></img>
        </figure>
        <figure>
        <img
        width="100%"
        height="100%"
          src={`/magnehole${width<600?"_mobile":""}.jpg`}
          alt="manyetik kum kolye"
          className="shadow-lg p-10 productTextImage"
        ></img>
        
        </figure>
       
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
