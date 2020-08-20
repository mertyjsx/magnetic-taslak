import React, { useEffect } from "react"
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });
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
  
    
 


<div style={{width:scroll*1.2-3900}} className="kolyeContainer items-center relative">


<div  className="yazı ">
<Fade bottom >

<h1 className="üst text-5xl md:text-4xl lg:text-6xl">Mangetic</h1>
</Fade>
<Fade bottom  duration={600} delay={500} >
<h6 className="alt text-4xl md:text-3xl lg:text-4xl">Neckles.</h6>

</Fade>

</div>






<div  className="yazı2 ">
<Fade bottom    duration={1000} delay={600} >


<h1 className="üst text-5xl md:text-4xl lg:text-6xl">Sea sand </h1>
</Fade>
<Fade bottom  duration={1000} delay={1000}>
<h6 className="alt text-4xl md:text-1xl lg:text-4xl">into stone <br></br>  as a result of<br></br> long processes.</h6>
</Fade>


</div>









<img className="kolye" src="/resim2.jpg">




</img>







     

    
    </div>
  )
}
