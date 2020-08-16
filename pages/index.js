import React, { useEffect } from "react"

import ReactPlayer from 'react-player'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar"
import Kumtası from "../components/kumtası"
import { motion,useViewportScroll } from "framer-motion"
import Manyetik from "../components/manyetik"
export default function Home() {

  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar></Navbar>
      <main className={styles.main}>
      <ReactPlayer url='https://www.youtube.com/watch?v=LMFAOLKaYd0&t=3s' loop={true} playing={true} />


<Manyetik ></Manyetik>


<Kumtası ></Kumtası>
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
