import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Kumtası from "../components/kumtası";

export default function Home() {
  return (
    <div className={styles.container}>
     

      <div>
        <div className="flex  xl:flex-row  flex-col-reverse lg:pt-4">
          <div className="relative sss ">
            <h1 className="tt text-center " key="Magnetic sand">Magnetic <br></br> Sand  </h1>

           
          </div>

          <div className="relative lg:pt-4 lg:ml-8 md:ml-16 lg:mt-4">
        
            
<video  autoPlay loop muted>
        <source src="/magneticVideo.mp4" type='video/mp4' />
          Your browser does not support the video tag
      </video>
          </div>
        </div>
      </div>
    </div>
  );
}
