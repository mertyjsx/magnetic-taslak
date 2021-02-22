import React, { useEffect, useState } from "react";


import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import dynamic from "next/dynamic";
 import Manyetik from '../components/manyetik' 
import Thymus from '../components/thymus'
import Level2 from '../components/level3'
import Level3 from '../components/level2'
import ButtonContainer from "../components/buttonContainer";
import SampleProduct from "../components/SampleProduct";

import config from "react-reveal/globals";

config({ ssrFadeout: true });
import { Fade } from "react-reveal";

export default function Home() {



  return (
    <div className={""}>
      <Head>
        <title>Stress relief Lodestone Magnetic sand </title>
        <meta
          name="description"
          content="Anxiety necklace ,buy anxiety stress relief sand necklace .Lodestone gemstone list  , magnetite uses, sand of Magnetic
      "
        />

        <meta property="og:title" content="Ünye Manyetik Kumtaşı Klasik" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://unyemanyetik.com/klasik" />
        <meta
          property="og:image"
          content="https://unyemanyetik.com/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi"
        />

        <meta property="product:price:amount" content="75" />
        <meta property="product:price:currency" content="TRY" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Ünye Manyetik Kumtaşı"></meta>

        <meta
          name="twitter:description"
          content="Stres avcısı manyetik kumdan yapılan sanatsal kolye"
        ></meta>

        <meta
          name="twitter:image"
          content="https://unyemanyetik.com/thumbnail.jpg"
        ></meta>

        <meta name="twitter:site" content="@magneticsand__"></meta>

        <meta name="twitter:creator" content="@magneticsand__"></meta>

        <title>Ünye Manyetik Kumu | Sanatsal El yapımı kolye</title>
        <meta
          name="title"
          content="Ünye Manyetik Kumu | Sanatsal El yapımı kolye"
        ></meta>
        <meta
          name="description"
          content="Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi , El yapımı doğal taş kolye , Quartz "
        ></meta>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
                  "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Ünye Manyetik Kumtaşı",
      "image": [
        "https://unyemanyetik.com/pure.jpg",
       
       ],
      "description": "Ünye Manyetik kumundan yapılan sanatsal takı , Stres kolyesi , Terapi kolyesi",
  
       
      },
    
      "offers": {
        "@type": "Offer",
        "url": "https://unyemanyetik.com/klasik",
        "priceCurrency": "TRY",
        "price": "75",
       
        "availability": "https://schema.org/InStock"
      }
                  `,
          }}
        />
      </Head>
      <main className={styles.main}>
        <Link href="iletisim"><div className="but il">İletişim</div></Link>

        <Manyetik></Manyetik>

        <Fade duration={2000}>
          <h2 className="text-center wh text-6xl font-bold mb-32 shadow-lg"></h2>
        </Fade>
        <h3 className="text-center text-6xl font-bold mt220 ">
          Kolye haline getirdik
        </h3>
        <h4
          className="shadow-lg text-3xl contentful responsiveWidth"
         
        >
          Ünye sahillerinde bulunan, içinde 20’ye yakın mineral olduğu tespit
          edilen, vücudun stresten arınmasına yardımcı olan manyetik siyah
          kumdan; özel işlemlere tabi tutularak, el işçiliği ile üretilmiştir.
          <br></br>
          <span class="text-3xl font-bold text-black">
            Siyah Manyetik kumu tasarımla buluşturduk
          </span>
        </h4>

        <SampleProduct></SampleProduct>
        <ButtonContainer></ButtonContainer>
        <Thymus></Thymus>

        <Level2></Level2>
    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-center text-gray-500 text-1xl">
            &copy;2021 Magnetic Sand All rights reserved.
          </p>
        </a>
        <a
          href="https://www.instagram.com/unye_manyetik_kumtasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          instagram
        </a>
       
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          twitter
        </a>
        <a
          href="https://www.pinterest.com/targaryengg15"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          pinterest
        </a>

        <a
          href="https://unyemanyetik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social text-sm "
        >
          website
        </a>
      </footer>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
