import React, { useEffect, useState } from "react"
import Link from "next/link"



const Navbar=()=>{
const [w,sw]=useState(1000)








useEffect(()=>{


sw(window.innerWidth)

})



return ([
    

<div className="navbarContainer ">
<div className="leftLink">
    <Link href="/">
    
<img src="/lala.png" style={{width:75, height:62}}></img>
    </Link>

</div>

<div className="flex flex-row items-center">
<Link href="/">

<h5 className="r5 ">Why</h5>

</Link>
<Link href="/products">

<div className="but">Products</div>

</Link>



</div>
</div>
]
)

}



export default Navbar