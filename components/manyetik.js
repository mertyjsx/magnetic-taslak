import React, { useEffect } from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"
import Kumtası from "../components/kumtası"

export default function Home() {


  
  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar></Navbar>
      <main >


<div className="flex    flex-col-reverse ">


<div className=" relative  ">


        <h1 className="text-7xl font-bold  text-center">
        Magnetic 
        </h1>

        <h1 className="text-7xl font-bold  text-center ">
        Sandstone.
        </h1>

</div>

    
 

<div className="relative mr-16">



     <img  src="/manyetik.gif" className="kum  md:ml-0 md:ml-32 ml-16 xl:mb-0  mb-16 "></img>
<div className="ab  "></div>

</div>

</div>




      </main>



    


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
