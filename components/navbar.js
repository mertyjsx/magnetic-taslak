import React, { useEffect, useState } from "react"




const Navbar=()=>{
const [w,sw]=useState(1000)








useEffect(()=>{


sw(window.innerWidth)

})



if(w<500)
return(
null
)
else return (

<div className="navbarContainer ">
<div className="leftLink">
<h4 className="r4">
16-inch model


</h4>
<h6 className="r6">MacBook Pro
</h6>

</div>

<div className="flex flex-row">

<h5 className="r5">Tech Specs</h5>

<div className="but">Buy</div>



</div>
</div>

)

}



export default Navbar