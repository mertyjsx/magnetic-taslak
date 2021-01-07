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
    
<img src="/lala.png" alt="magnetic sand" style={{width:75, height:62}}></img>
    </Link>

</div>

<div className="flex flex-row items-center">
<a href="https://www.etsy.com/shop/MagneticPendant?ref=simple-shop-header-name&listing_id=845604646">

<h5 className="r5 hover">Buy on ETSY</h5>

</a>
<Link href="/products">

<div className="but">Products</div>

</Link>
<Link href="/contact">

<div className="but">Contact us</div>

</Link>



</div>
</div>
]
)

}



export default Navbar
