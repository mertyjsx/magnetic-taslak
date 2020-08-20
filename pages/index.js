import React, { useEffect, useState } from "react"
import Levelline from "../components/levelLine"

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Link from "next/link"
import Navbar from "../components/navbar"
import Kumtası from "../components/kumtası"
import {RotateLoader} from "react-spinners"
import Manyetik from "../components/manyetik"
import Thymus from "../components/thymus"
import Level2 from "../components/level2"
import Level3 from "../components/level3"
import Buttons from "../components/buttons"

import config from 'react-reveal/globals';

config({ ssrFadeout: true });
import {Fade} from "react-reveal"
import Ara from "../components/aralevel"


import Email from "../components/email"
export default function Home() {


const [loading,setloading]=useState(true)


useEffect(()=>{
setTimeout(() => {
  setloading(false)
}, 1500);

})









  return (
    <div className={styles.container} >
<img src="/w1.png" hidden={true}></img>
<img src="/w2.png" hidden={true}></img>

<img src="/heart.png" hidden={true}></img>
<img src="/oxford.png" hidden={true}></img>


      <Head>

        <title>Magnetic Sand</title>
        <link rel="icon" href="/lala.png" />



      </Head>




{

  loading?(


[
<RotateLoader className="spintop" css={{position:"absolute",top:"40vh"}} size={20}></RotateLoader>,

  <img className="spin" src="spin.png"></img>
]


  ):(

[<main className={styles.main}>
     


  <Manyetik ></Manyetik>
  
  
  
  
  <Levelline></Levelline>
  <Fade duration={2000}  >
  
  <h2 className="text-center text-6xl font-bold mb-32">
  
  Trigger the thymus gland .
  </h2>
  
  </Fade>
  <Thymus></Thymus>
  
  <Level3></Level3>
  
  <h2 className="text-center text-6xl font-bold ">
  
  Use as a necklace .
  </h2>
  <h4 className="text-center text-3xl font-normal mb-32 mt-8" style={{color:"#333232",width:"70%"}}>
  
  After long efforts, we made it into stone so that you can use it where your thymus gland is.You can use it as a necklace.
  
  
  Besides its benefits, 
  <br></br>
  <span class="text-3xl font-bold text-black">
  you can use it  
  
  as a stylish accessory.
  </span>
  
  </h4>
  
  <iframe className="video" height="auto" width="100%"  src="https://www.youtube.com/embed/jp99moeB_Lw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <Ara></Ara>
  <h2 className="text-center text-6xl font-bold ">
  
  Location of magnetic sand
  </h2>
  <h4 className="text-center text-3xl font-normal mb-32 mt-8" style={{color:"#333232",width:"70%"}}>
  
  Which gives its name to the Black Sea sand, 4-kilometer beach is 
  
  located in the district of 
  <span  class="text-3xl font-bold text-black ml-2">
  
  
  <Link href="https://goo.gl/maps/1X8JcURvEbemsAEE6">
  
  Turkey Unye.
  </Link>
  </span>
  <br></br>
  It is completely natural.
  It sticks to you and is difficult to come off, you can collect it with a magnet
  
  </h4>
  <Kumtası ></Kumtası>
  
  <Level2></Level2>
  
  <h2 className="text-center text-6xl font-bold mb-4 mt-8">
  What is our difference ?
  
  </h2>
  <h4 className="text-center text-3xl font-normal mb-32 " style={{color:"#333232",width:"70%"}}>
  
  Bulgaria and Georgia use magnetic sand for healing purposes like sand bath, however 
  we are the only ones in the world that make this sand an accessory.
  <span  class="text-3xl font-bold text-black ml-2">
  
  
  
  Health and elegance together.
  </span>
  
  </h4>
  <Buttons></Buttons>
  
        </main>,
        <Email></Email>,
        
      <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
           <p class="text-center text-gray-500 text-1xl">
              &copy;2020 Magnetic Sand All rights reserved.
  </p>
       <img src="/black_sand.png" style={{width:100 ,height:100}}></img>
      </a>
    </footer>
]


  )
}




    


    </div>
  )
}
