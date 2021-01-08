import "../styles/globals.css";
import Navbar from "../components/navbar";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return [
   
    <Head >
    
  
    
    
    
          <title>Magnetic Sand Necklace for Stress Relief Anxiety </title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
          <meta property="og:type" content="website" />
          <meta  name="og:title" property="og:title" content="Magnetic sand necklace , stress relief jewelry"></meta>
          <meta name="og:url" property="og:type" content="product"/>
          <meta property="og:image" content="https://magneticsand.net/thumbnail.jpg" />

         
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta
            name="description"
            content="
            Magnetic black sand beach hawaii ,on the big island.Crystal store near me,Stress relief,gemstone list, how does kinetic sand work ,magnetite uses,handmade on amazon
            "
          />
          <meta
            name="keywords"
            content="magnetic,sand,stone,seasand,gift,breastmilk jewelry,magnetic sand necklace,pendant,stress,age,health,anxiety,necklace,etsy , stress relief , gemstone"
          />
          <meta name="robots" content="index, follow" />
    
          <meta name="language" content="English" />
          <meta name="thumbnail" content="/thumbnail.jpg" />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link>
        
               
        
            </Head>,
    <Navbar></Navbar>,
    <Component {...pageProps} />,
  ];
}

export default MyApp;
