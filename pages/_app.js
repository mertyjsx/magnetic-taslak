import "../styles/globals.css";
import Navbar from "../components/navbar";
function MyApp({ Component, pageProps }) {
  return [
    <Head>
      <title>Magnetic Sand Necklace</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
      <meta
        name="og:title"
        property="og:title"
        content="stress relief necklaces jewelry"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="description"
        content="Necklace , pendant , jewelry made by sea sand that has magnetic effect from Black Sea region"
      />
      <meta
        name="keywords"
        content="magnetic,sand,stone,seasand,gift,breastmilk jewelry,magnetic sand necklace,pendant,stress,age,health,anxiety,necklace,etsy , stress relief , gemstone"
      />
      <meta name="robots" content="index, follow" />

      <meta name="language" content="English" />
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
