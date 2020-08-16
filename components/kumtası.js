import React, { useEffect } from "react"

export default function Home() {
    const [scroll,setScroll]=React.useState(0)
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(position);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    
     
    }, []);
    console.log(scroll)
      
  
  return (
  
    
 


<div style={{width:scroll+300,maxWidth:"100%",paddingTop:200}}>


<img className="kolye" src="/sonartık.jpg">




</img>





     

    
    </div>
  )
}
