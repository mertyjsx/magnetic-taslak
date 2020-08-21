import React from "react"

import Link from "next/link"
import config from 'react-reveal/globals';
import {Fade} from "react-reveal"
config({ ssrFadeout: true });

const Line =()=>{

 


    return(
[
<div className="levelContainer1 mt-24">




<div className="left flex flex-col items-center justify-center">
<Fade bottom>


<img src="black_sand.png" className="logow"></img>
<h3 className="text-center text-2xl  font-normal mt-4">
You can discover our 
<span className="font-bold ml-2 mr-2">
    products
    
    </span>
     made of magnetic sand
</h3>
</Fade>
</div>


<div className="right">
<Fade bottom delay={300}>
<div className=" flex flex-col justify-center">
    <img src="oxford.png" className="mb-4 self-center w-32 h-32" ></img>
<h3 className="text-center text-2xl  font-normal  ">
Proven resources
</h3>

<div className=" text-center w-full text-xl md:text-xl xl:text-2xl text-white  font-normal flex flex-wrap  flex-row items-center justify-center mt-8">
<div className="flex flex-row items-center mr-2 ml-4 justify-start ">

<img  className="mr-2 dotsvg" style={{width:7,height:7,backgroundColor:"black"}}></img>

<Link href="https://www.ox.ac.uk/news/2016-08-22-study-suggests-routes-improved-immunity-older-people">Oxford</Link > 

</div>
<div className="flex flex-row items-center mr-1  ml-8  justify-start mt-2 mb-2 md:mt-0 md:mb-0">

<img  className="mr-2 dotsvg" style={{width:7,height:7,color:"black",backgroundColor:"black"}}></img>
<Link  href="https://www.verywellhealth.com/thymus-gland-overview-4582270">Verywell Health</Link >  

</div>
<div className="mr-1 ml-8 flex flex-row items-center  ">

<img  className="mr-2 dotsvg" style={{width:7,height:7,color:"black",backgroundColor:"black"}}></img>
<Link href="https://www.livescience.com/62527-thymus.html" >Live Science</Link > 

</div>
</div>


</div>

</Fade>
</div>
    





<div className="lineContainer">

<div className="line2"></div>
<div className="circle2">
4
</div>

</div>


</div>,


<h5 className="altyazı3">
    Why us ?
</h5>
]

    )

}

export default Line