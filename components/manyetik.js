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
            <img
              src="/ezgif.gif"
              alt="magnetic sand"
              className="kum   md:ml-32     lg:ml-16 ml-16 xl:mb-0  mb-16 lg:mb-8 lg:mt-8"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
